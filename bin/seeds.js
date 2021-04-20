// Iteration #1
const drones = require("../dronesData");
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/express-drones-dev")
    .then(() => {
        console.log("Connected only to create information")

        Drone.insertMany(drones)
        .then(drones => {
            console.log(`"{drones.lenght} inserted.`)
        })
    })
    .catch(error => console.error(error));
