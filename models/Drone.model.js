// Iteration #1
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  propellers: {
    type: Number,
    min: 0,
  },
  maxSpeed: {
    type: Number,
    min: 0,
  },
});

const Drone = mongoose.model("drone", droneSchema);

module.exports = { Drone };
