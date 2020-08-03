// Iteration #1
require('../configs/db.config')
const mongoose = require('mongoose')


const DroneModel = require('../models/Drone.model')


DroneModel.insertMany([ 
        { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
        { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
        { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
      
])
    .then(() => {
        mongoose.connection.close()
            .then(() => {
                console.log('Heyy connection is closed!')
            })
    })