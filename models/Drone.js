const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema ({
  name: { type: String},
  propellers: { type: Number },
  maxSpeed: { type: Number }
}) 

module.exports = model("drones", droneSchema);