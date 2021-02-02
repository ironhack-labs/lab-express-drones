// Iteration #1
const mongoose = require('mongoose');
require("dotenv").config();
require("../configs/db.config");
const Drone = require("../models/Drone.model");

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.deleteMany()
  .then(() => {
    Drone.create(drones)
      .then((drones) => {
        console.log(`${drones.length} drones added to the database`);
      })
      .then(() => {
        mongoose.connection.close();
        console.log("Mongoose disconected")
      })
  })
  .catch((error) => console.log(error))
