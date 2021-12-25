const mongoose = require("mongoose");

const DB_CONNECT = () => {
	// eslint-disable-next-line
	mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	mongoose.connection
		.once("open", function () {
			console.log("Connection to MongoDB (Database) was succesfull");
		})
		.on("error", console.error.bind(console, "Connection error: "));
};

module.exports = {
	connect: DB_CONNECT,
};
