require('../db')

const DroneModel = require('../models/Drone.model')
const mongoose = require('mongoose')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

DroneModel.create(drones)
  .then(()=>{
    console.log(drones)
    mongoose.connection.close()
})
.catch(()=>{
    console.log('seeding failed')
})