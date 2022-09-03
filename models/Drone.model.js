// Iteration #1
const { Schema, model } = require('mongoose');

const droneSchema = new Schema({
    name: { type: String },
    propellers: { type: Number },
    maxSpeed: [{ type: String }],
}, {
    timestamps: true,
});

const droneModel = model('drones', droneSchema);

module.exports = droneModel;