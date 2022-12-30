const { Schema, model } = require("mongoose");
const droneSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  propellers: Number,
  maxSpeed: Number
});

module.exports = model("Drone", droneSchema);
