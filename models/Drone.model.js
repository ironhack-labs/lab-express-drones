// Iteration #1
const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: { type: Number, min: 0, max: 18 },
  },
  {
    timestamps: true,
  }
);

const Drone = model('Drone', droneSchema);

module.exports = Drone;
