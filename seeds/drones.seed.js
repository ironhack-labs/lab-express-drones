const Drone = require("../models/Drone.model")
const mongoose = require("mongoose");
const { collection } = require("../models/Drone.model");

// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

require("../db")

Drone
    .collection.drop()
    .catch(err => console.log(err))
Drone
    .insertMany(drones)
    .then(drones => console.log("Inserted into db:", drones))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())