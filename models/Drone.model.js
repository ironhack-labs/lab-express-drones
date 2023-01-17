// Iteration #1
const { Schema, model } = require('mongoose');

const drone = new Schema({
  name: { type: String, required: true },
  propellers: { type: Number },
  maxSpeed: { type: Number, default: 0 },
});

module.exports = model('Drones', drone);
