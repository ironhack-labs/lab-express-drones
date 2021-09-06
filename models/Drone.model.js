// Iteration #1
// models/Drone.model.js
const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
	{
		name: String,
		propellers: Number,
		maxSpeed: Number
	},
	{
		timestamps: true
	}
);

// Name of the DB and the schema
module.exports = model('Drones', droneSchema);
