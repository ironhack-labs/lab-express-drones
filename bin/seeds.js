// Iteration #1

const mongoose = require("mongoose");
require("../configs/db.config");
const DroneModel = require("../models/drone.model");

const drones = [
  {
    name: "DJI Mavic 2 Pro",
    propellers: 4,
    maxSpeed: 16,
  },
  {
    name: "DJI Phantom 4",
    propellers: 3,
    maxSpeed: 12,
  },
  {
    name: "Parrot Anafi",
    propellers: 6,
    maxSpeed: 15,
  },
];

DroneModel.create(drones)
  .then(() => {
    console.log(drones.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
