// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";

const drones = [
  { name: "Senem", propellers: 3, maxSpeed: 12 },
  { name: "Tuna", propellers: 4, maxSpeed: 20 },
  { name: "Pete", propellers: 6, maxSpeed: 18 },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return Drone.deleteMany(); // will remove all drones from the db
  })
  .then((response) => {
    console.log(response);
    return Drone.create(drones);
  })
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    // Once created, close the DB connection
    mongoose.connection.close();
  });
