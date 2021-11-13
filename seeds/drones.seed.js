const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

// Iteration #1
const allDrones = [
  { name: "Marco", propellers: 4, maxSpeed: 10 },

  { name: "Eli", propellers: 4, maxSpeed: 20 },

  { name: "Javi", propellers: 4, maxSpeed: 30 },
];

Drone.create(allDrones);
console.log(allDrones.length);
