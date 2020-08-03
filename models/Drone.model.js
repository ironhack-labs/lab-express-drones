const mongoose = require('mongoose')

let droneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

module.exports = mongoose.model('droneApp', droneSchema)