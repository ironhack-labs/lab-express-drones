// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://0.0.0.0/express-drones';

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    return Drone.create(drones);
  })
  .then(dronesFromDB => {
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(`Error ${err}`)
  });