// Iteration #1

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  propellers: Number,
  maxSpeed: Number,
});

const Drone = mongoose.Model("Drone", droneSchema);

module.exports = Drone;
