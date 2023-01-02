// Iteration #1
const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number
  },
  {
    timestamps: true //tell mongoose to store the time stamp of the data entry
  }
);

module.exports = model('Drone', droneSchema);