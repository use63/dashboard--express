import sequelize from "./db.js";

async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	} finally {
		await sequelize.close(); // Optional, untuk menutup koneksi setelah selesai
	}
}

testConnection();
