import { DataSource } from "typeorm";
import ormconfig from "../../../ormconfig.json";
import { Product } from "../entity/product";
import { Student } from "../entity/student";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "student",
    synchronize: true,
    logging: true,
    entities: [Product, Student]
})