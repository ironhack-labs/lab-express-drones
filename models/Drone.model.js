// Iteration #1
const mongoose = require("mongoose");
const moment = require("moment");

const droneSchema = mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
  image: String,
  updated: {
    type: Date,
    default: moment(),
  },
});

const Drone = mongoose.model("drone", droneSchema);

module.exports = Drone;
