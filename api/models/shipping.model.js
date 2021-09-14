const mongoose = require("mongoose");

const { Schema } = mongoose;

const shippingSchema = new Schema({
	shipping: {
		payment: {
			option: {
				type: Array,
				required: true,
				default: ["cash, card"],
			},
			cash: {
				type: Number,
				required: true,
				default: 2,
			},
			card: {
				type: Number,
				required: true,
				default: 0,
			},
		},
		method: {
			type: Array,
			required: true,
			default: ["GLS", "Slovenská pošta a.s", "UPC"],
		},
	},
});

module.exports = mongoose.model("ShippingObject", shippingSchema);
