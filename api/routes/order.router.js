const express = require("express");

const router = express.Router();

const OrderSchema = require("../models/order.model");

router.get("/", async (req, res, next) => {
	try {
		const orders = await OrderSchema.find();
		return res.json(orders);
	} catch (error) {
		return next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newOrder = new OrderSchema(req.body);
		const cretedOrder = await newOrder.save();

		return res.json(cretedOrder);
	} catch (error) {
		if (error.name === "ValidationError") {
			res.status(422);
		}
		return next(error);
	}
});

router.delete("/", async (req, res, next) => {
	try {
		await OrderSchema.deleteOne();
	} catch (error) {
		next(error);
	}
});

module.exports = router;
