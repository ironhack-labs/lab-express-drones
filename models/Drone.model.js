// Iteration #1
const { Schema, model } = require('mongoose');

const droneSchema = new Schema ({
    name: String,
    propellers: {
        type: Number,
        default: 0
    },
    maxSpeed: {
        type: Number,
        default: 0
    } 
});

const Drone = model('Drone', droneSchema);

module.exports = Drone;