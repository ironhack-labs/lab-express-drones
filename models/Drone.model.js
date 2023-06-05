const { Schema, model } = require("mongoose");
const droneSchema = new Schema({
  name: { type: String, require: true },
  propellers: { type: Number, require: true },
  maxSpeed: { type: Number, require: true },
});

module.exports = model("Drone", droneSchema);
