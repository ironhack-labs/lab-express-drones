// Iteration #1

require("../db/index");

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const drones = require("../drones.json");

mongoose.connection.once("open", () => {
  mongoose.connection
    .dropCollection("drones")
    .then(() => {
      console.log("DB cleared");

      return Drone.create(drones);
    })
    .then((dronesDB) => {
      dronesDB.forEach((drone) => {
        console.log(`${drone.name} has been created`);
      });

      console.log(`${dronesDB.length} drones have been created`);
    })
    .catch((err) => console.error(err))
    .finally(() => {
      mongoose.disconnect();
    });
});
