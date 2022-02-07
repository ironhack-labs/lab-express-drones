// Iteration #1
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

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

Drone.create(drones)
  .then((results) => {
    console.log("successfully added seed drones to db");
  })
  .catch((err) => {
    console.log("something went wrong when adding the seeds to the db", err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
