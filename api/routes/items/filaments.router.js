const express = require("express");

const router = express.Router();

const {
	ColorSchema,
	TypeSchema,
} = require("../../models/items/filaments.model");

router.get("/colors/", async (req, res, next) => {
	try {
		const colors = await ColorSchema.find();
		res.json(colors);
	} catch (error) {
		next(error);
	}
});

router.get("/types/", async (req, res, next) => {
	try {
		const fTypes = await TypeSchema.find();
		res.json(fTypes);
	} catch (error) {
		next(error);
	}
});

router.post("/colors/", async (req, res, next) => {
	try {
		const newColors = new ColorSchema(req.body);
		const createdColors = await newColors.save();

		res.json(createdColors);
	} catch (error) {
		if (error.name === "ValidationError") {
			res.status(422);
		}
		next(error);
	}
});

router.post("/types/", async (req, res, next) => {
	try {
		const newType = new TypeSchema(req.body);
		const createdType = await newType.save();

		res.json(createdType);
	} catch (error) {
		if (error.name === "ValidationError") {
			res.status(422);
		}
		next(error);
	}
});

module.exports = router;
