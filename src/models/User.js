import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Users = sequelize.define(
	"Users",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: "Users",
		timestamps: false, // Set to true if you have `createdAt` and `updatedAt` fields
	}
);

export default Users;