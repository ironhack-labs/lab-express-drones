const mongoose = require('mongoose');

const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;