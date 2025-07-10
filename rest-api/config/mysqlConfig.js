const { Sequelize } = require("sequelize");

// Konfigurasi MySQL dengan Sequelize
const sequelize = new Sequelize("usersdb", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

const connectMySQL = async () => {
	try {
		await sequelize.authenticate();
		console.log("MySQL connected!");

		// Sync database - create tables if they don't exist
		await sequelize.sync({ alter: true });
		console.log("MySQL tables synchronized!");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

module.exports = { sequelize, connectMySQL };
