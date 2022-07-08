// Iteration #1
const mongoose = require('mongoose')
const Drone = mongoose.model('Drone', {
    name: String,
    propellers: Number,
    maxSpeed: Number,
}) 

module.exports = Drone

