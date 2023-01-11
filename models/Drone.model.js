const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: String,
    propellers: Number,
    speed: Number,
})

const Drone = model('Drone', schema)

module.exports = Drone;