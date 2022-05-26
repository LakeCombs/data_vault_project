const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectDB = require("./config/mongo");
const appRouter = require("./routers/route");
const bodyParser = require("body-parser");
const csv = require("csvtojson");
const path = require("path");
const multer = require("multer");
const { default: CSVError } = require("csvtojson/v2/CSVError");
const PORT = process.env.PORT || 2456;
const CSV = require("./model/csvModel");
const {
	notFound,
	errorHandler
} = require("./middleware/errorHandlerMiddleware");

const storage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});

var uploads = multer({ storage: storage });

connectDB();

app
	.use(express.json())
	.use(cors())
	.use(bodyParser.urlencoded({ extended: false }));

app.use(notFound).use(errorHandler);

let temp;

app.post("/", uploads.single("csv"), (req, res) => {
	csv()
		.fromFile("./FundingSavvi_SelectedFirms(CSV) (1).csv")
		.then((jsonObj) => {
			console.log(jsonObj);

			// for (var x = 0; x < jsonObj; x++) {
			// 	temp = parseFloat(jsonObj[x].Test1);
			// 	jsonObj[x].Test1 = temp;
			// 	temp = parseFloat(jsonObj[x].Test2);
			// 	jsonObj[x].Test2 = temp;
			// 	temp = parseFloat(jsonObj[x].Test3);
			// 	jsonObj[x].Test3 = temp;
			// 	temp = parseFloat(jsonObj[x].Test4);
			// 	jsonObj[x].Test4 = temp;
			// }

			CSV.insertMany(jsonObj, (err, data) => {
				if (err) {
					console.log(err);
				} else {
					res.status(200).json(data);
				}
			});
		});
});

app.listen(PORT, () => {
	console.log(`server is listening to ${PORT}`);
});
