// Iteration #1
const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
  {
    name: String,
    propellors: Number,
    maxSpeed: Number,
  },
);

module.exports = model('Drone', droneSchema);
