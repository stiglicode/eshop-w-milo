const mongoose = require("mongoose");

const { Schema } = mongoose;

const Color = new Schema({
	filamentColor: {
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
});

const Type = new Schema({
	filamentType: {
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
});

module.exports = {
	ColorSchema: mongoose.model("ColorObject", Color),
	TypeSchema: mongoose.model("TypeObject", Type),
};
