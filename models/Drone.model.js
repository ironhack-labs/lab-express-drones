const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema (
    {
        name: { type: String },
        propellers: { type: Number },
        maxSpeed: { type: Number }
    }
);

const Drone = model('Drone', droneSchema);

module.exports = Drone;