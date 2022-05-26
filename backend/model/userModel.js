const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		person: { type: String, required: true }
	},
	{ timestamps: true }
);

userModel.methods.comparePassword = async function (password) {
	return await bcryptjs.compare(password, this.password);
};

userModel.pre("save", async function (next) {
	if (!this.isModified()) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hast(this.password, salt);
});

module.exports = mongoose.model("User", userModel);
