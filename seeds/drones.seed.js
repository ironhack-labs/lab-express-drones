// Iteration #1
require('../db')

const DroneModel = require('../models/Drone.model')

const mongoose = require('mongoose')

let drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

DroneModel.insertMany(drones)
.then(()=>{
    console.log(drones.length)
    mongoose.connection.close()
})
.catch((err)=>{
    console.log(err)
    mongoose.connection.close()
})