// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  propellers: {
    type: Number,
    default: 0,
  },
  maxSpeed: Number,
});

module.exports = model("Drone", droneSchema);
