const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  // TODO: write the schema
  name: {
    type:String,
    required:true,
    unique:true
  },
  propeller: {
    type:Number,
    required:true
  },
  
  maxSpeed: {
    type:Number,
    required:true
  },

});

const Drone= mongoose.model('Drone', droneSchema);

module.exports = Drone;


