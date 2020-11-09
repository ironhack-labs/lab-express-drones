const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const droneModel = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number
  },

);
 
module.exports = model('Drone', droneModel);