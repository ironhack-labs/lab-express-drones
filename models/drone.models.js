const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const droneSchema = new Schema({
  name: {type: String},
  propellers: {type: Number},
  maxSpeed: {type: Number}

});

const Drones = mongoose.model ('Drones', droneSchema);

module.exports = Drones;