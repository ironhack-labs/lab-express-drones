// Iteration #1
//
//1 -- Importo
const mongoose = require("mongoose");

//2 -- Schema

const droneSchema = mongoose.Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
    timestamp: true,
  }
);

//3 -- Model
const Drone = mongoose.model("Model", droneSchema);

//4 -- Exportación

module.exports = Drone;
