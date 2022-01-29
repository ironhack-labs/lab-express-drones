// Iteration #1
require("../db");

const Drone = require("../models/Drone.model")

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Max vel", propellers: 12, maxSpeed: 30 },
    { name: "Falcon", propellers: 5, maxSpeed: 21 },
    { name: "Air Force 1", propellers: 6, maxSpeed: 18 }
  ];

Drone.create(drones)
    .then((drones)=> console.log(drones))
    .catch((error)=>console.log(error))
