import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Photo } from './entity/Photo';
import { getMySQLConn } from './config';
import { PhotoMeta } from './entity/PhotoMeta';

const dbConfig = getMySQLConn();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.user,
    password: dbConfig.pass,
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [User, Photo, PhotoMeta],
    migrations: [],
    subscribers: [],
})
