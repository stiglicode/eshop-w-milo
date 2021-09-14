const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
	product_details: {
		id: {
			type: String,
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
			price: {
				type: Number,
				required: true,
			},
		},
		totalPrice: {
			type: Number,
			required: true,
		},
	},
	billing_details: {
		customerName: {
			type: String,
			required: true,
		},
		customerEmail: {
			type: String,
			required: true,
		},
		customerPhone: {
			type: String,
			required: true,
		},
		customerAddress: {
			town: {
				type: String,
				required: true,
			},
			street: {
				type: String,
				required: true,
			},
			homeNumber: {
				type: String,
				required: true,
			},
			zipCode: {
				type: Number,
				required: true,
			},
		},
		payment: {
			type: String,
			required: true,
		},
		shipping: {
			type: String,
			required: true,
		},
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
	status: {
		type: String,
		required: true,
		default: "New order",
	},
});

module.exports = mongoose.model("OrderObject", orderSchema);
