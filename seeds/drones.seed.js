// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const connectDB = require("../db/index");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

connectDB()
  .then(() => {
    Drone.DronedeleteMany().then(() => {
      Drone.create(drones).then((drone) => {
        console.log(`Created ${drone.length} Drones.`);
        mongoose.connection.close();
      });
    });
  })
  .catch((err) => {
    console.log("Error occured while inserting the drones", err);
  });
