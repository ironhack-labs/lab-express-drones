// Iteration #1

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: {type: String, required: true},
    propellers: {type: Number, required: true},
    maxSpeed: {type: Number, required: true}
    });

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
