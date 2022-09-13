// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: {
    type: String,
  },
  propellers: Number,
  maxSpeed: Number,
});

const Drone = model("Drone", droneSchema);

module.exports = Drone;
