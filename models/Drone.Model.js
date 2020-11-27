const mongoose = require("mongoose")

let DroneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number
})

let Drone = mongoose.model("Drone", DroneSchema)

module.exports = Drone