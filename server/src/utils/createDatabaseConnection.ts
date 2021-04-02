import { Connection, createConnection } from "typeorm";
import path from "path";
import { User } from "../entities/User";
import { Expense } from "../entities/Expense";
import { __prod__ } from "../globals";

export const createDatabaseConnection = (): Promise<Connection> =>
  __prod__
    ? createConnection({
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: false,
        migrations: [path.join(__dirname, "../migrations/*")],
        entities: [User, Expense],
      })
    : createConnection();
