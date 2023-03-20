const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Drone = require(path.join(__dirname, "..", "models", "Drone.model.js"));

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

// Iteration #1
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];
Drone.create(drones)
  .then((newDocuments) => {
    console.log(`created ${newDocuments.length} Documents`);
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
