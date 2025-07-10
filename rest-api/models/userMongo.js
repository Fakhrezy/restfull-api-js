const mongoose = require("mongoose");

// Definisi schema User untuk MongoDB dengan timestamps
const userSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			unique: true,
			required: true
			// Auto increment akan dihandle di controller
		},
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		age: { type: Number, required: true }
	},
	{
		timestamps: true // Ini akan menambahkan createdAt dan updatedAt
	}
);

const UserMongo = mongoose.model("User", userSchema);

module.exports = UserMongo;
