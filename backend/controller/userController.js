const User = require("../model/userModel");

const userlogin = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		throw new Error("fill in the required field");
	}
	const user = await User.findOne({ email });

	const confirmPassword = await user.matchPassword(password);
	console.log(confirmPassword);

	try {
		if (user && (await user.matchPassword(password))) {
			const UserObject = { user, token: generateToken(user._id) };
			res.status(201).json(UserObject);
		}

		if (!user) {
			res.status(404);
			throw new Error("User not found, register to login");
		}
	} catch (error) {
		res.status(400).json(error);
	}
};

const RegisterUser = async (req, res) => {
	const { email, password, name } = req.body;
	if (!email || !name || !passworde) {
		throw new Error("Please complete the required field");
	}
	const userExist = await User.findOne({ email });
	if (userExist) {
		throw new Error("User already exist");
	}

	try {
		const user = await User.create(req.body);
		return res.status(200).json({ loginin, token: generate_token(user._id) });
	} catch (error) {
		return res.status(400).json(error.message);
	}
};

module.exports = { userlogin, RegisterUser };
