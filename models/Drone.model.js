const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number
  },
  {
    timestamps: true
  }
);

const Drone = mongoose.model('Drone', droneSchema);
module.exports = Drone; 