import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import "dotenv-safe/config";
import cors from "cors";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { __prod__ } from "./globals";
import { ExpenseResolver } from "./resolvers/ExpenseResolver";
import { createDatabaseConnection } from "./utils/createDatabaseConnection";

const app = express();

const RedisStore = connectRedis(session);
const redis = new Redis(process.env.REDIS_URL);

app.set("trust proxy", 1);
app.use(
  session({
    name: "sid",
    store: new RedisStore({
      client: redis,
      disableTouch: true,
    }),
    proxy: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
      httpOnly: true,
      sameSite: "lax",
      // secure: __prod__,
      domain: __prod__ ? process.env.DOMAIN : undefined,
    },
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
);

const connectApolloServer = async () => {
  try {
    const connection = await createDatabaseConnection();

    await connection.runMigrations();

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [UserResolver, ExpenseResolver],
        validate: false,
      }),
      context: ({ req, res }) => ({ req, res, redis }),
    });

    apolloServer.applyMiddleware({ app, cors: false });
  } catch (error) {
    console.log(error);
  }
};

connectApolloServer();

app.listen(process.env.PORT || 4000, () => {
  console.log("server started");
});
