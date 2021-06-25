// Iteration #1
const mongoose = require('mongoose');

let DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

let DroneModel = mongoose.model('drone', DroneSchema);
module.exports = DroneModel;
