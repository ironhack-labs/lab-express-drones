require('../db');

const Drone = require("../models/Drone.model");
const mongoose = require('mongoose')



const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
  { name: "XD", propellers: 1, maxSpeed: 50}
];

Drone.create(drones)
.then((drones) => {
  console.log(`Estas en ${drones}`)
  mongoose.connection.close()
})
.catch((err) => {
  console.error("FATAL ERROR");
});

 
