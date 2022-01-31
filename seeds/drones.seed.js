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
  {
    name: "Avenger",
    propellers: 3,
    maxSpeed: 100,
  },
  {
    name: "Bumblebee",
    propellers: 4,
    maxSpeed: 80,  
    
  },
  {
    name: "Megatron",
    propellers: 2,
    maxSpeed: 130,
  }, ]

  Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating drones from the DB: ${err}`)
  );

