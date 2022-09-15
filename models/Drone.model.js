// Iteration #1
const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  propellers: {
    type: Number,
  },
  maxSpeed: {
    type: Number,
  },
});

const Drone = mongoose.model('drone', droneSchema);

module.exports = { Drone };
