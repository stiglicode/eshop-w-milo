const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdminProfileSchema = new Schema({
	permission: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
		minLength: 8,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

module.exports = mongoose.model("AdminProfileObject", AdminProfileSchema);
