//name: string, propellers: number, maxSpeed: number

const mongoose = require('mongoose')

const {Schema, model} = mongoose

const droneSchema = {
    name: String,
    propellers: Number,
    maxSpeed: Number
}

module.exports = model('Drone', droneSchema)