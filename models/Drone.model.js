const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

//   name - String (name of the drone model, like General Atomics MQ-9 Reaper)
//   propellers - Number (amount of propellers, like 4)
//   maxSpeed - Number (meters per second for the drone's maximum speed, like 18)

const Drone = mongoose.model("Drone", droneSchema);
module.exports = Drone;
