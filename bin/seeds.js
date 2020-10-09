// Iteration #1
const mongoose = require('mongoose')
const droneModel = require('../models/Drone.models')

require('../configs/db.config')

let droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

droneModel.insertMany(droneData)
  .then(() =>{
      console.log(droneData)
      mongoose.connection.close()
  })
  .catch((error) =>{
      console.log("Failed to add seed data", error)
  })



