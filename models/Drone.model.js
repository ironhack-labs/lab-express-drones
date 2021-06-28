const {Schema, model} = require ("mongoose")

const DroneSchema = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

module.exports = model ("Drone", DroneSchema)