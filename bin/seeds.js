// Iteration #1: Adding information into the database.
const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model");

require("../configs/db.config");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
  { name: "McDrone 4050", propellers: 8, maxSpeed: 17 },
  { name: "XT Dronish 4", propellers: 10, maxSpeed: 25 },
  { name: "Imran DRONE XL", propellers: 64, maxSpeed: 64 },
  { name: "Santidrone Ltd", propellers: 32, maxSpeed: 32 },
];

DroneModel.create(drones)
  .then((res) => {
    console.log("Data was added.");
    console.log(res);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
