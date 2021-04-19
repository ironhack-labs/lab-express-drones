// Iteration #1
const drones = require("../data");
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");
const DB_NAME = "express-drones-dev";

mongoose
  .connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log("Connected to database only to create the first information");

    Drone.insertMany(drones)
    .then((drones) => {
      console.log(`${drones.length} drones inserted.`);
      
      mongoose.disconnect();
    });
  })
  .catch((error) => console.error(error));


