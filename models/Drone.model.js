const Mongoose = require("mongoose");

let DroneSchema = new Mongoose.Schema({
    name: String, 
    propellers: Number, 
    maxSpeed: Number 
})


let DroneModel = Mongoose.model("myDrone", DroneSchema)

module.exports = DroneModel