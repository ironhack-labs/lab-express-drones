// Iteration #1
const mongoose = require("mongoose");
require("../db/index");
const Drone = require("../models/Drone.model")

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

Drone.insertMany(drones)
.then((result) => {
    console.log("Drones Created: "+ result.length);
    mongoose.connection.close();
    console.log("Connection Closed")
})
.catch((e) => {console.log(e)})

