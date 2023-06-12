// Iteration #1
require('../db')
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
const drones = [
  {
    name: "Discovery Series II",
    propellers: 4,
    maxSpeed: 29,
  },
  {
    name: "Sentra",
    propellers: 5,
    maxSpeed: 30,
  },
  {
    name: "Cordia",
    propellers: 2,
    maxSpeed: 27,
  },
]

Drone.create(drones)
  .then((droneSeeds) => {
    console.log("Added drone seeds: ", droneSeeds.length)
    mongoose.disconnect()
  })
  .catch((err) => console.log("Error while adding seeds of drones: ", err))