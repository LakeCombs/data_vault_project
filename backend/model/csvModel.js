const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
	COMPANY: { type: String },
	FUND: { type: Number },
	INVESTMENT_MIN: { type: Number },
	INVESTMENT_MAX: { type: Number },
	COUNTRY: { type: String },
	ADDRESS: { type: String },
	ZIP: { type: String },
	STATE: { type: String },
	PHONE: { type: String },
	FAX: { type: String },
	EMAIL: { type: String },
	WEBSITE: { type: String },
	STAGE: { type: String },
	INDUSTRY_PREFERENCES: { type: String },
	INVESTOR_TYPES: { type: String },
	COMMENTS: { type: String },
	MANAGEMENT_TEAMNAME: { type: String }
});

module.exports = mongoose.model("CSV", csvSchema);
