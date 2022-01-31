// Iteration #1
// bin/seeds.js

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://0.0.0.0/lab-express-drones";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

const drones = [
  {
    name: "Wind Eater",
    propellers: 4,
    maxSpeed: 16,
  },
  {
    name: "Fire Starter",
    propellers: 6,
    maxSpeed: 18,
  },
  {
    name: "Torpedo 1000",
    propellers: 8,
    maxSpeed: 20,
  },
];

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating books from the DB: ${err}`)
  );