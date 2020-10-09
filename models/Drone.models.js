const mongoose =require('mongoose')

const DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})

let droneModel = mongoose.model('drone', DroneSchema)

module.exports = droneModel