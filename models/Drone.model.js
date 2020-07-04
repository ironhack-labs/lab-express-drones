const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dronesSchema = new Schema({

  name: {
    type: String,
  }, 

  propellers: {
    type: Number,
  }, 

  maxSpeed: {
    type: Number
  }

});

const Drone = mongoose.model('Drone', dronesSchema);

module.exports = Drone;