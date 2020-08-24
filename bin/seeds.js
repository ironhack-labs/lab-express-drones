// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const DB_NAME = "express-drone-dev";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} movies`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting drones from the DB: ${err}`)
  );