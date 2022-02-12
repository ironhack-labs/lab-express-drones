// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model.js");

const drones = [
  { name: "NightCrawler", propellers: 4, maxSpeed: 20 },
  { name: "T-Rex", propellers: 3, maxSpeed: 30 },
  { name: "Invader", propellers: 10, maxSpeed: 100 },
];

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)

  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .then(() => {
    mongoose.connection.db.dropDatabase();
    return Drone.create(drones);
    // node seeds/drones.seed.js
  })
  .then((droneList) => console.log("Drone List Here", droneList))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .then(() => {
    console.log("closing connection");
    mongoose.connection.close();
  });
