// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  propellers: Number,
  maxSpeed: Number,
});

const Drone = model("Drone", droneSchema);

module.exports = Drone;
