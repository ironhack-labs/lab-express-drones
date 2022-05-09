// Iteration #1
require("../db");

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

// Seed database
Drone.create(drones)
  .then((droneData) => {
    console.log(`You just created ${droneData.length} drones`);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(`An error occurred: ${error}`);
  });
