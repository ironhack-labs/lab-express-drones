// Iteration #1
const mongoose = require('mongoose')

const DroneModel = require('../models/Drone.model')

require('../configs/db.config')

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

DroneModel.insertMany(drones)
.then(() => {
    console.log('this much added:', drones.length)
    mongoose.connection.close()
})
.catch((err) => {
    console.log('HELP WHY OMG', err)
})