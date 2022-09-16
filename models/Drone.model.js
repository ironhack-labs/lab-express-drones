// Iteration #1
// const drones = [
//     { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
//     { name: "Racer 57", propellers: 4, maxSpeed: 20 },
//     { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
//   ];

const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
    name: {
      required: true,
      type: String,
      unique: true,
    },
    propellers: {
      type: Number,
      max: 100,
      min: 0,
    },
    maxSpeed: {
        type: Number,
        max: 100,
        min: 0,
      },
  });
  
  const Drone = mongoose.model("drone", droneSchema);
  
  module.exports = { Drone };