// Iteration #1
const { Schema, model } = require('mongoose');

const dronesSchema = new Schema({
    name: { type: String },
    propellers: { type: Number },
    maxSpeed: { type: Number }
});

const DroneModel = model('drones', dronesSchema);

module.exports = DroneModel;
