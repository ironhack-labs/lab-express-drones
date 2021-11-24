// Iteration #1

//imports:
const mongoose = require ("mongoose")
const droneSchema = mongoose.Schema({
    name:String,
    propellers:Number,
    maxSpeed:Number,
    image: String
})

//export model
const Drone = mongoose.model("Drone", droneSchema )
module.exports = Drone