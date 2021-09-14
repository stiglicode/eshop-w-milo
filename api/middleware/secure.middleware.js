require("dotenv").config();

const secureAPI = (req, res, next) => {
	const api_key = req.query.api_key;
	if (api_key === process.env.API_KEY) {
		next();
	} else {
		res.status(401).json({ message: "Authentication failed!" });
	}
};

module.exports = secureAPI;
