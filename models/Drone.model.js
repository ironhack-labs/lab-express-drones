// Iteration #1

// The Drone model should have:

// name - String (name of the drone model, like General Atomics MQ-9 Reaper)
// propellers - Number (amount of propellers, like 4)
// maxSpeed - Number (meters per second for the drone's maximum speed, like 18)

const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

// mongoose will turn "Recipe" into the collection "recipes"
const Drone = mongoose.model('drone', droneSchema);

module.exports = Drone;
