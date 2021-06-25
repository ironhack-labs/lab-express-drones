// Iteration #1
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

require('../db');

const mongoose = require('mongoose');
const DroneModel = require('../models/Drone.model');

DroneModel.create(drones)
    .then((result) => {
        console.log(result.length);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log('Seeding failed!', err);
        mongoose.connection.close();
    });

    