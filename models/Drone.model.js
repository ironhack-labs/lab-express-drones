// Iteration #1
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		propellers: {
			type: Number,
			required: true,
			min: 0,
		},
		maxSpeed: {
			type: Number,
			required: true,
			min: 0,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Drone", droneSchema);
