// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

require('../db/index');

const drones = [
    {
        name: "drone1",
        propellers: 4,
        maxSpeed: 12
    },
    {
        name: "drone2",
        propellers: 2,
        maxSpeed: 24
    },
    {
        name: "drone3",
        propellers: 6,
        maxSpeed: 36
    }
]

Drone.deleteMany()
  .then(() => Drone.create(drones))
  .then(newDrones => {
    console.log(`Created ${newDrones.length} drones`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while getting drones from the DB: ${err}`)
  );