// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/DroneModel.js");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

// require("../configs/db.config");

let drones = [
  {
    name: "Athos",
    propellers: 3,
    maxSpeed: 13,
  },
  {
    name: "Porthos",
    propellers: 5,
    maxSpeed: 21,
  },
  {
    name: "Aramis",
    propellers: 8,
    maxSpeed: 34,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Drone.create(drones);
  })
  .then((seededDrones) => {
    console.log(`Created ${seededDrones.length}`);

    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log("DB connection closed!");
  })
  .catch((err) => {
    console.log(`An error occurred while creating books from the DB: ${err}`);
  });
