const mongoose = require('mongoose');

const DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const DroneModel = mongoose.model('drone', DroneSchema)

module.exports = DroneModel;