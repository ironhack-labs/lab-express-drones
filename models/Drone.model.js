const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number, //meters per second
});

const droneModel = mongoose.model("Drone", droneSchema);

module.exports = droneModel;
