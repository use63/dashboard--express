import sequelize from "../db.js";
import { time } from "../utils/index.js";

const connDB = sequelize
	.authenticate()
	.then(() => {
		console.log(time + " - Database connected");
	})
	.catch((err) => {
		console.error("\x1b[31m", time + " - Unable to connect to the database:", "\x1b[0m"), err;
	});

export default connDB;