// Iteration #1
const mongoose = require('mongoose');

const REQUIRED_ERROR = 'Required field';

// Schema

const DroneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, REQUIRED_ERROR],
    },
    propellers: {
      type: Number,
      required: [true, REQUIRED_ERROR],
    },
    maxSpeed: {
        type: Number,
        required: [true, REQUIRED_ERROR],
      },
  },
  {
    timestamps: true,
  }
)

// Model

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;