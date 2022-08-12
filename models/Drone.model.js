// Iteration #1
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const droneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

module.exports = model("Drone", droneSchema);
