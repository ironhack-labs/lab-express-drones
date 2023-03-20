// Iteration #1

const { Schema, model } = require("mongoose");


const droneSchema = new Schema(
  {
    name: {
        type: String,
        minLength: 1
    },
    propellers: {
        type: Number,
        min: 2
    },
    maxSpeed: Number,
  },
);

const Drone = model("Drone", droneSchema);

module.exports = Drone;
