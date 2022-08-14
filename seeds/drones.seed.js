// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

/*Connect to the database */
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

/*Create drone array */

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

/*Create a drone document for the server */
Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`There are in total in the array ${dronesFromDB.length}`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(
      `Oopsie, there went something wrong with the drone seeds file ${err}`
    );
  });

module.exports = drones;
