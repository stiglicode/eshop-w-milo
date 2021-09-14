const express = require("express");

const router = express.Router();

const AdminLogsSchema = require("../../models/auth/logs.model");

const middlewares = require("../../middleware/index");

const lastPath = (request, pos) => {
	const pathSplit = request.originalUrl.split("/");
	const pathLenght = pos ? pathSplit.length - pos : pathSplit.length - 1;

	return pathSplit[pathLenght];
};

router.get("/logs", middlewares.secureAPI, async (req, res, next) => {
	try {
		const logs = await AdminLogsSchema.find();
		res.json(logs);
	} catch (error) {
		next(error);
	}
});

router.get("/logs/:yearSlug", async (req, res, next) => {
	try {
		const logs = await AdminLogsSchema.find({
			yearSlug: lastPath(req),
		});
		res.json(logs);
	} catch (error) {
		next(error);
	}
});

router.get("/logs/:yearSlug/:monthSlug", async (req, res, next) => {
	try {
		const logs = await AdminLogsSchema.find({
			monthSlug: lastPath(req),
			yearSlug: lastPath(req, 2),
		});
		res.json(logs);
	} catch (error) {
		next(error);
	}
});

router.get("/logs/:yearSlug/:monthSlug/:daySlug", async (req, res, next) => {
	try {
		const logs = await AdminLogsSchema.find({
			daySlug: lastPath(req),
			monthSlug: lastPath(req, 2),
			yearSlug: lastPath(req, 3),
		});
		res.json(logs);
	} catch (error) {
		next(error);
	}
});

router.post("/logs", async (req, res, next) => {
	try {
		const newLog = new AdminLogsSchema(req.body);
		const createdLog = await newLog.save();

		return res.json(createdLog);
	} catch (error) {
		if (error.name === "ValidationError") {
			return res.status(422);
		}
		return next(error);
	}
});

router.delete("/logs/", async (req, res, next) => {
	try {
		await AdminLogsSchema.deleteOne();
	} catch (error) {
		next(error);
	}
});

module.exports = router;
