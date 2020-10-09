// Iteration #1
const mongoose = require("mongoose");
require("../configs/db.config");
const DroneModel = require("../models/Drone.model.js");

DroneModel.create({ name: "test", propellers: 4, maxSpeed: 18 })
  .then(() => {
    console.log("Added");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
