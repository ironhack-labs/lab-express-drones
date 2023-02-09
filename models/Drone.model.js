const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const droneSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  propellers: {
    type: Number, 
    required: true
  },
  maxSpeed: {
    type: Number, 
    required: true
  },
  image: {
    type: String
  }
})

const Drone = mongoose.model('Drone', droneSchema);
module.exports = Drone;