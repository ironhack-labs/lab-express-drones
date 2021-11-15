// Iteration #1

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DroneSchema = new Schema({
    name : {type: String},
    propellers: {type: Number},
    maxSpeed: {type: Number}
})

const Drone = mongoose.model("Drone", DroneSchema)
module.exports = Drone