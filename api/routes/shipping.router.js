const express = require("express");

const router = express.Router();

const ShippingSchema = require("../models/shipping.model");

router.get("/", async (req, res, next) => {
	try {
		const shipping = await ShippingSchema.find();
		return res.json(shipping);
	} catch (error) {
		return next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newShipping = new ShippingSchema(req.body);
		const cretedShipping = await newShipping.save();

		return res.json(cretedShipping);
	} catch (error) {
		if (error.name === "ValidationError") {
			res.status(422);
		}
		return next(error);
	}
});

router.delete("/", async (req, res, next) => {
	try {
		await ShippingSchema.deleteOne();
	} catch (error) {
		next(error);
	}
});

module.exports = router;
