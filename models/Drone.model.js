const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const Drone = model('Drone', droneSchema);

module.exports = Drone;