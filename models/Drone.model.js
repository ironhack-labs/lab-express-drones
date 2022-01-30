const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  propellers: {
    type: Number,
    required: true,
  },
  maxSpeed: {
    type: Number,
    required: true,
  }
});

const Drone = model("Movie", droneSchema);

module.exports = Drone;