
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  {
    name: { type: String, required: true },
    propellers: { type: Number, min: 1, max: 8,required: true },
    maxSpeed: { type: Number, min: 0, max: 30, required: true },
    image: {type: String, default: 'https://media.wired.com/photos/5d604b6cf0b4760008c8968b/master/w_1600%2Cc_limit/20190826-ash-takeout.jpg'},
  },
  {
    timestamps: true
  }
);
 
module.exports = model('Drone', droneSchema);