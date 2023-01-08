// Iteration #1
const mongoose = require("mongoose");

let droneSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  propellers: {
    type: Number,
  },
  maxSpeed: {
    type: Number,
  },
});

let Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;
