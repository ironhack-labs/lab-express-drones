// Iteration #1
const { Schema, model } = require('mongoose');

const droneSchema = new Schema({
    name: { type: String, required: true },
    propellers: { type: Number, default: 2 },
    maxSpeed: { type: Number, default: 100 }
});

const droneModel = model('drones', droneSchema);

module.exports = droneModel;