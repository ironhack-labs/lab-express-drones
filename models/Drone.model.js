// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

module.exports = model("Drone", droneSchema);
