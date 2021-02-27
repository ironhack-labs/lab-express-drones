// Iteration #1
require("./../configs/db.config");
const mongoose = require("mongoose");
const DroneModel = require("./../models/Drone.model");


const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

DroneModel.insertMany(drones)
  .then(() => console.log(`Added ${drones.length} documents to the DB!`))
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err));


