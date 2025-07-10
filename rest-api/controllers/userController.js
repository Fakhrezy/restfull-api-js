const UserMysql = require("../models/userMysql");
const UserMongo = require("../models/userMongo");

// **MySQL (Sequelize)**
exports.getAllUsersMySQL = async (req, res) => {
	try {
		const users = await UserMysql.findAll();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: "Error fetching MySQL users", error });
	}
};

exports.createUserMySQL = async (req, res) => {
	try {
		const { name, email, age } = req.body;
		const user = await UserMysql.create({ name, email, age });
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ message: "Error creating MySQL user", error });
	}
};

exports.updateUserMySQL = async (req, res) => {
	const { id } = req.params; // ID dari user yang akan diupdate
	const { name, email, age } = req.body;

	try {
		const user = await UserMysql.findByPk(id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Update user
		user.name = name || user.name;
		user.email = email || user.email;
		user.age = age || user.age;
		await user.save();

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: "Error updating MySQL user", error });
	}
};

exports.deleteUserMySQL = async (req, res) => {
	const { id } = req.params;

	try {
		const user = await UserMysql.findByPk(id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		await user.destroy();
		res.status(200).json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting MySQL user", error });
	}
};

// **MongoDB (Mongoose)**
exports.getAllUsersMongo = async (req, res) => {
	try {
		const users = await UserMongo.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: "Error fetching MongoDB users", error });
	}
};

exports.createUserMongo = async (req, res) => {
	try {
		const { name, email, age } = req.body;

		// Auto-increment ID
		const lastUser = await UserMongo.findOne().sort({ id: -1 });
		const nextId = lastUser ? lastUser.id + 1 : 1;

		const user = new UserMongo({
			id: nextId,
			name,
			email,
			age
		});
		await user.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ message: "Error creating MongoDB user", error });
	}
};

exports.updateUserMongo = async (req, res) => {
	const { id } = req.params; // ID dari user yang akan diupdate
	const { name, email, age } = req.body;

	try {
		// Gunakan field 'id' custom, bukan '_id'
		const user = await UserMongo.findOne({ id: parseInt(id) });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Update user
		user.name = name || user.name;
		user.email = email || user.email;
		user.age = age || user.age;
		await user.save();

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: "Error updating MongoDB user", error });
	}
};

exports.deleteUserMongo = async (req, res) => {
	const { id } = req.params;

	try {
		// Gunakan field 'id' custom, bukan '_id'
		const user = await UserMongo.findOneAndDelete({ id: parseInt(id) });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting MongoDB user", error });
	}
};
