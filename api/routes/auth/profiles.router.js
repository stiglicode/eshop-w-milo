require("dotenv").config();

const express = require("express");
const AdminProfileSchema = require("../../models/auth/profiles.model");
const jwt = require("jsonwebtoken");

const verifiedByJWT = require("../../middleware/jwt");

const router = express.Router();

router.get("/profile", async (req, res, next) => {
	try {
		const admin = await AdminProfileSchema.find();
		res.json(admin);
	} catch (error) {
		next(error);
	}
});

router.get("/", verifiedByJWT, async (req, res, next) => {
	try {
		const userDetails = await AdminProfileSchema.find();
		if (req.userID === userDetails[0]._id.toString()) {
			res.json({
				user_details: {
					name: userDetails[0].name,
					permission: userDetails[0].permission,
					created_at: userDetails[0].createdAt,
					id: userDetails[0]._id,
				},
				authentication: true,
			});
		} else {
			res.json({
				user_details: {},
				authentication: false,
			});
		}
	} catch (error) {
		next(error);
	}
});

// router.post("/profile", async (req, res, next) => {
// 	try {
// 		const newAdmin = new AdminProfileSchema(req.body);
// 		const createdAdmin = await newAdmin.save();

// 		return res.json(createdAdmin);
// 	} catch (error) {
// 		if (error.name === "ValidationError") {
// 			return res.status(422);
// 		}
// 		return next(error);
// 	}
// });

router.post("/profile", async (req, res, next) => {
	try {
		const userDetails = await AdminProfileSchema.find();
		const skeleton = {
			usr_name: "",
			auth: [false, false],
			token: "",
		};

		if (req.body.usr_name === userDetails[0].name) {
			skeleton.auth[0] = true;
		} else {
			skeleton.auth[0] = false;
		}

		if (req.body.usr_pass === userDetails[0].password) {
			skeleton.auth[1] = true;
		} else {
			skeleton.auth[1] = false;
		}

		if (skeleton.auth[0] === true && skeleton.auth[1] === true) {
			const _id = userDetails[0]._id;
			// eslint-disable-next-line
			const jw_token = jwt.sign({ _id }, process.env.JWT_SECRET, {
				expiresIn: 300,
			});
			return res.send({
				usr_name: userDetails[0].name,
				auth: skeleton.auth,
				token: jw_token,
			});
		} else {
			return res.send({
				usr_name: skeleton.usr_name,
				auth: skeleton.auth,
				token: "",
			});
		}
	} catch (error) {
		next(error);
	}
});

router.delete("/profile", async (req, res, next) => {
	try {
		await AdminProfileSchema.deleteOne();
	} catch (error) {
		next(error);
	}
});

module.exports = router;
