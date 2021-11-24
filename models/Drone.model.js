// Iteration #1
//1. IMPORTACIONES
const mongoose          =require("mongoose")



//2. SCHEMA
const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
    image: String
},{timestamps: true})

//3.MODEL
const Drone = mongoose.model("Drone", droneSchema)

//4.EXPORT
module.exports = Drone