require('../db')

const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model");

// Iteration #1
DroneModel.insertMany([
        { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
        { name: "Racer 57", propellers: 4, maxSpeed: 20 },
        { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
])
    .then(() => {
        console.log('Drone added')
        mongoose.connection.close()
    })

    .catch(() => {
        console.log('Seeding failed')
        mongoose.connection.close()
    })

  