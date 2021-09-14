const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	images: {
		type: Array,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	filamentColor: {
		options: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	filamentType: {
		options: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	size: {
		options: {
			type: Number,
			required: true,
			min: 1,
			max: 4,
		},
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

module.exports = mongoose.model("ProductObject", productSchema);
