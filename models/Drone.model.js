// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
    {
      //aqui va la estructura:
      name: String,
      propellers: Number,
      maxSpeed: Number
    }
  );
  
  //ultimo para exportar
  
  module.exports = model("DRONE", droneSchema);