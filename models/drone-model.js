const mongoose = require("mongoose");

const Drones = new mongoose.Schema({
  name: String,
  propollers: Number,
  maxSpeed: Number
})

module.exports = mongoose.model("Drones", Drones)