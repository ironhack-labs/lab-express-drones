// Iteration #1 
const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  //Info that is going to be prompt
  {
    name: String,
    propellers: String,
    maxspeed: Number,
  },
  //MongoDB Options
);
module.exports = model('Drone', droneSchema)