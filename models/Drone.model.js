// Iteration #1
const { Schema, model } = require('mongoose');


const dronesSchema = new Schema(
      {
        name: String,
        propellers: Number,
        maxSpeed: Number, 
      }
);

const Drone = model("Drone", dronesSchema);

module.exports = Drone;