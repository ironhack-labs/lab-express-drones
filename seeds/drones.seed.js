// Iteration #1
mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const dronesData = require("../constants/drones.json");

require("../db/index");

mongoose.connection.once("connected", () => {
  console.log("Seeds connected to DB");

  mongoose.connection
    .dropDatabase()
    .then(() => {
      console.log("DB has been cleared");
    })
    .then(() => {
      return Drone.create(dronesData);
    })
    .then((dronesDB) => {
      dronesDB.forEach((drone) => console.log(drone));
    })
    .catch((err) => console.error(err))
    .finally(() => {
      mongoose.connection
        .close()
        .then(() => {
          console.log("End of seeds");
        })
        .catch((err) => console.error(err))
        .finally(() => {
          process.exit(0);
        });
    });
});
