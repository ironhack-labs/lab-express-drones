// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: String,
  propellers: String,
  maxSpeed: Number,
});

module.exports = model("Drone", droneSchema);
