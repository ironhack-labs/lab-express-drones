// Iteration #1
require('../db')

const droneModel = require('../models/Drone.model')
const mongoose = require('mongoose')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];
  
droneModel.insertMany(drones)
.then(() => {
    console.log('Drones added')
    mongoose.connection.close()
})
.catch(() => {
    console.log('Drones not added')
    mongoose.connection.close()
})
  