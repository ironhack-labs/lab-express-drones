const mongoose = require('mongoose')

const Schema = mongoose.Schema

const droneSchema = new Schema({
    name: {type: String},
    propellers: {type: Number},
    maxSpeed: {type: Number},
},{versionkey: false})

const Drone = mongoose.model('Drone', droneSchema)

module.exports = Drone
