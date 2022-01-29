const { Schema, model } = require("mongoose");

const dronSchema = new Schema({
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
  },
  
});

const Drone = model("Dron", dronSchema);

module.exports = Drone;