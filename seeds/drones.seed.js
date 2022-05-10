// Iteration #1
require("../db");
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const droneSeed = async () => {
  try {
    await Drone.deleteMany();
    await Drone.create(drones);
    console.log(`${drones.length} drones created`);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

droneSeed();
