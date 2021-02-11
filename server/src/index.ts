import "reflect-metadata";
import express from 'express'
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection } from "typeorm";
import 'dotenv/config';
import cors from "cors";
import Redis from "ioredis";
import session from 'express-session';
import connectRedis from 'connect-redis';
import { __prod__ } from "./globals";
import { User } from "./entities/User";
import path from "path";


const app = express();

const RedisStore = connectRedis(session);
const redis = new Redis();

app.use(
    session({
        name: 'id',
        store: new RedisStore({
            client: redis,
            disableTouch: true
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
            httpOnly: true,
            sameSite: "lax",
            secure: __prod__
        },
        secret: process.env.REDIS_SECRET!,
        resave: false,
        saveUninitialized: false
    })
)
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);


const connectApolloServer = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: 'localhost',
            port: 5432,
            username: "postgres",
            password: "1234",
            database: "expense_manager",
            synchronize: true,
            logging: true,
            migrations: [path.join(__dirname, "./migrations/*")],
            entities: [User],
        });

        const apolloServer = new ApolloServer({
            schema: await buildSchema({
                resolvers: [UserResolver]
            }),
            context: ({ req, res }) => ({ req, res, redis })
        });

        apolloServer.applyMiddleware({ app, cors: false });

    } catch (error) {
        console.log(error)
    }
}

connectApolloServer();

app.listen(4000, () => {
    console.log('server started');
});