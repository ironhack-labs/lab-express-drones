// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: String,
  propeller: Number,
  maxSpeed: Number,
});

const Drone = model("Drone", droneSchema);

module.exports = Drone;
