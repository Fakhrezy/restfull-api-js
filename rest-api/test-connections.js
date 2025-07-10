const { connectMySQL } = require("./config/mysqlConfig");
const { connectMongoDB } = require("./config/mongoConfig");

// Test database connections
const testConnections = async () => {
	console.log("Testing database connections...\n");

	console.log("1. Testing MySQL connection...");
	try {
		await connectMySQL();
		console.log("✅ MySQL connection successful!\n");
	} catch (error) {
		console.log("❌ MySQL connection failed:", error.message, "\n");
	}

	console.log("2. Testing MongoDB connection...");
	try {
		await connectMongoDB();
		console.log("✅ MongoDB connection successful!\n");
	} catch (error) {
		console.log("❌ MongoDB connection failed:", error.message, "\n");
	}

	process.exit(0);
};

testConnections();
