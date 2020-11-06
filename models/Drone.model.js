const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const DroneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number, 
  },
  {
    timestamps: true
  }
);

module.exports = model('Drone', DroneSchema);