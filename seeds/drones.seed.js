// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

require('../db');

let dronesArray = [
    {
        name: "Drone number 1 - First Iteration",
        propellers: 4,
        maxSpeed: 40,
    },
    {
        name: "Drone number 2 - First Iteration",
        propellers: 5,
        maxSpeed: 50,
    },
    {
        name: "Drone number 3 - First Iteration",
        propellers: 6,
        maxSpeed: 60,
    }
]


Drone.deleteMany()
.then(deletedDrones => {
  console.log(`Deleted ${deletedDrones} drones`);
})
.then(
  Drone.insertMany(dronesArray)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    console.log(dronesFromDB)
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while getting drones from the DB: ${err}`)
  ))