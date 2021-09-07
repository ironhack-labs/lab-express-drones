// Iteration #1
const mongoose = require("mongoose");

const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const drones = [
  { name: "Air Force Max", propellers: 12, maxSpeed: 150 },
  { name: "Black Sting Pro 5", propellers: 6, maxSpeed: 300 },
  { name: "I am a drone", propellers: 2, maxSpeed: 15 },
];

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(
      `An error occurred while creating drones from the DB: ${err.message}`
    )
  );
