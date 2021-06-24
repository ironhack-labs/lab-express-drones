// Iteration #1
const mongoose = require("mongoose");
const drones = require("../drones.json");
const Drone = require("../models/Drone.model");

require("../db/index");

Drone.collection.drop();

Drone.create(drones, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    data.forEach((drone) => {
      console.log(`${drone.name}: ${drone.propellers} propellers`);
    });
  }
  mongoose.connection
    .close()
    .then(() => console.log("Finish seeds.js"))
    .catch((e) => console.error(e))
    .finally(() => {
      process.exit(0);
    });
});
