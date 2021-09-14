const mongoose = require("mongoose");

const { Schema } = mongoose;

var os = require("os");
var networkInterfaces = os.networkInterfaces();

const AdminLogsSchema = new Schema({
	ip: {
		type: String,
		required: true,
		default: networkInterfaces.eth0[0].address,
	},
	_id_profile: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
		default: Date.now(),
	},
	auth_token: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("AdminLogsObject", AdminLogsSchema);
