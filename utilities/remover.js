const express = require("express");

const router = express.Router();

const rm_collection = (schema, path) => {
	router.delete(path, async (req, res, next) => {
		try {
			await schema.deleteOne();
		} catch (error) {
			next(error);
		}
	});
};

module.exports = {
	remove: rm_collection,
};
