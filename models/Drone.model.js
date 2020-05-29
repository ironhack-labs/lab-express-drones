const mongoose = require('mongoose')

const DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

module.exports = mongoose.model('drone', DroneSchema)