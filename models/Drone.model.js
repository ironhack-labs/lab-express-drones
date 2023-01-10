const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})

const Drone = model('Drone', schema)

module.exports = Drone;