import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const development = {
	username: "root",
	password: "root",
	host: "localhost",
	port: 3306,
	DBname: "express",
	dialect: "mariadb",
	dialectOptions: { connectTimeout: 5000 },
};

const production = {
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	DBname: "express",
	dialect: "mariadb",
	dialectOptions: { connectTimeout: 10000 },
};

const env = development;

const { DBname, username, password, dialect, host , port, dialectOptions} = env;

const sequelize = new Sequelize(DBname, username, password, {
	dialect: dialect,
	host: host,
	port: port,
	dialectOptions: dialectOptions
});

export default sequelize