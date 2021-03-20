// Iteration #1

// require Drone model
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

// require database configuration
require('../configs/db.config');

const dronesToAdd = [
  { name: 'General Atomics MQ-9 Reaper', propellers: 4, maxSpeed: 18 },
  { name: 'Challenger MTX8', propellers: 2, maxSpeed: 10 },
  { name: 'XYZ Flyer S-9', propellers: 1, maxSpeed: 6 },
];

Drone.create(dronesToAdd)
  .then((drones) => {
    console.log(
      `Seeding completed in the database: ${drones.length} drones added!`
    );
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log('Error while seeding the database ==> ', err);
  });
