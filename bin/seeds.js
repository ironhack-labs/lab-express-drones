// Connection to mongodb
require("./../configs/db.config")
const mongoose = require('mongoose');

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  // Fetch the model Schema
const DroneModel = require('./../models/Drone.model');

DroneModel.insertMany(drones)
  .then( dbDrones => console.log("Insert element to DB", dbDrones))
  .catch(err => console.log("Failed insertMany", err))
  .then(() => {
    mongoose.connection.close()
  })