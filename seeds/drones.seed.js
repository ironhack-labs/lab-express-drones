// Iteration #1

//* Require mongoose, the model and the database connection
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
require("../db");

//* Data to seed
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

//* Create the drones in the database
Drone.create(drones)
  .then((createdDrones) => {
    console.log(`You've just created ${createdDrones.length} drones`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("You ran into an error while creating the documents", err);
  });
