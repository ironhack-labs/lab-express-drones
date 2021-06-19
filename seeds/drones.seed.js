// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const data = require("../drones.json");

require("../db/index");

mongoose.connection.once("connected", () => {
  mongoose.connection.db
    .dropDatabase()
    .then(() => {
      console.log("Database cleared");

      return Drone.insertMany(data);
    })
    .then((dronesCreated) =>
      console.log(`${dronesCreated.length} posts have been created`)
    )
    .catch((e) => console.error(e))
    .finally(() => {
      mongoose.connection
        .close()
        .then(() => console.log("Finish seeds.js"))
        .catch((e) => console.error(e))
        .finally(() => {
          process.exit(0);
        });
    });
});


