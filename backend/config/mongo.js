const mongoose = require("mongoose");

const connectDB = async (req, res) => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log(`Connected to: ${connect.connection.host}`);
	} catch (error) {
		console.log(`Connection Error: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;
