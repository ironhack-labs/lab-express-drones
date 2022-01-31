// Iteration #1

const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
  {
    title: String,
    propellers: Number,
    maxSpeed: Number
  },
  {
    timestamps: true
  }
);

module.exports = model('Drone', droneSchema);
