
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  {
    name: { type: String, required: true },
    propellers: { type: Number, min: 1, max: 8,required: true },
    maxSpeed: { type: Number, min: 0, max: 30, required: true },
    image: {type: String, default: 'images/General-AtomicsMQ-9-Reaper.png'},
  },
  {
    timestamps: true
  }
);
 
module.exports = model('Drone', droneSchema);