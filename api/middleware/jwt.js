require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifiedByJWT = (req, res, next) => {
	const token = req.headers["x-access-token"];

	if (token) {
		// eslint-disable-next-line
		return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (!err) {
				req.userID = decoded._id;
				req.userAuth = true;
				next();
			} else {
				req.userID = "";
				req.userAuth = false;
				next();
			}
		});
	} else {
		req.userID = "";
		req.userAuth = false;
		next();
	}
};

module.exports = verifiedByJWT;
