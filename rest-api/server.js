const express = require("express");
const bodyParser = require("body-parser");
const { connectMySQL } = require("./config/mysqlConfig");
const { connectMongoDB } = require("./config/mongoConfig");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middlewares
app.use(bodyParser.json()); // Untuk parsing JSON body

// CORS middleware (untuk testing dari Postman)
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});

// Routes
app.use("/api/users", userRoutes);

// Basic route untuk testing
app.get("/", (req, res) => {
	res.json({ message: "REST API Server is running!" });
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res
		.status(500)
		.json({ message: "Something went wrong!", error: err.message });
});

// Connect ke MySQL dan MongoDB
const startServer = async () => {
	try {
		await connectMySQL();
		await connectMongoDB();

		// Mulai server
		const PORT = 3000;
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
			console.log("Available endpoints:");
			console.log("- GET http://localhost:3000/api/users/mysql-show");
			console.log("- GET http://localhost:3000/api/users/mongo-show");
		});
	} catch (error) {
		console.error("Failed to start server:", error);
	}
};

startServer();
