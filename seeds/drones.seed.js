// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
        { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
        { name: "Racer 57", propellers: 4, maxSpeed: 20 },
        { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Drone.deleteMany({})
  })
  .then((res) => {
    return Drone.create(drones)
  })
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB} drones`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });