// Iteration #1
require("dotenv").config()
require("../db/index")
const Drone = require("../models/Drone.model")


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];



Drone.deleteMany()
  .then(() => Drone.insertMany(drones))
  .then((drones) => drones.map((drone) => console.log(book.title)))
  .finally(() => {
    process.exit();
});