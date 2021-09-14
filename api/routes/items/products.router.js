const express = require("express");

const router = express.Router();

const ProductSchema = require("../../models/items/products.model");

router.get("/", async (req, res, next) => {
	try {
		const products = await ProductSchema.find();
		res.json(products);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const products = await ProductSchema.findOne();
		return res.json(products);
	} catch (error) {
		return next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newProduct = new ProductSchema(req.body);
		const createdProduct = await newProduct.save();

		res.json(createdProduct);
	} catch (error) {
		if (error.name === "ValidationError") {
			res.status(422);
		}
		next(error);
	}
});

router.delete("/", async (req, res, next) => {
	try {
		await ProductSchema.deleteOne();
	} catch (error) {
		next(error);
	}
});

module.exports = router;
