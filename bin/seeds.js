const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const DB_NAME = "express-drone";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const droneArray = [
  { name: "Super-Mega-Fast drone", propellers: 12, maxSpeed: 50 },
  { name: "McDonald's drone", propellers: 1, maxSpeed: 2 },
  { name: "NASA Space drone", propellers: 0, maxSpeed: 300000000 },
  { name: "Home-made drone", propellers: 4, maxSpeed: 10 },
];

Drone.create(droneArray)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting drones from the DB: ${err}`)
  );
