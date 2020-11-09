// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/drone.model");

const DB_NAME = "express-drones-dev";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const drones = [
  {
    name: 'Azazoth',
    propellers: 10,
    maxSpeed: 999,
  },
  {
    name: 'Ashitaka the damned',
    propellers: 2,
    maxSpeed: 10,
  },
  {
    name: 'Kaladin the Windrunner',
    propellers: 4,
    maxSpeed: 35,
  },
  {
    name: 'Kvothe - 3000',
    propellers: 6,
    maxSpeed: 23,
  } 
];

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting drones from the DB: ${err}`)
  );