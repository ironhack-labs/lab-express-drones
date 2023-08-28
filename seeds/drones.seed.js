// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

  const drones = [
    {
        name: "General Atomics MQ-9 Reaper",
        propellers: 4,
        maxSpeed: 100
    },
    {
        name: "General Atomics KS-1 Rapton",
        propellers: 4,
        maxSpeed: 120
    },
    {
        name: "General Monecular QR-8 Raptor",
        propellers: 4,
        maxSpeed: 120
    }
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Drone.create(drones);
  }) 
  .then((dronesFromDb) => {
        console.log(dronesFromDb.length);
        mongoose.connection.close();
    })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
  

