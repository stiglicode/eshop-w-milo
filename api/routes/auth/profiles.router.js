const express = require("express");

const router = express.Router();

const AdminProfileSchema = require("../../models/auth/profiles.model");

router.get("/profile", async (req, res, next) => {
	try {
		const admin = await AdminProfileSchema.find();
		res.json(admin);
	} catch (error) {
		next(error);
	}
});

router.get("/profile/:permission", async (req, res, next) => {
	try {
		const admin = await AdminProfileSchema.findOne();
		res.json(admin);
	} catch (error) {
		next(error);
	}
});

router.post("/profile", async (req, res, next) => {
	try {
		const newAdmin = new AdminProfileSchema(req.body);
		const createdAdmin = await newAdmin.save();

		return res.json(createdAdmin);
	} catch (error) {
		if (error.name === "ValidationError") {
			return res.status(422);
		}
		return next(error);
	}
});

module.exports = router;
