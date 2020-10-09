// Iteration #1
const mongoose = require('mongoose')
const DroneModel = require('../models/Drone.models')//.. to go out of the folder / means entering 

require('../configs/db.config')

DroneModel.insertMany([
    {name: "Genius Bomb 50K", propellers: 500, maxSpeed: 100},
    {name: "Warrior Croatian k800", propellers: 650, maxSpeed: 250},
    {name: "Champion 5K500", propellers: 50, maxSpeed: 100}
])
    .then(() => {
        console.log('data added')
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Something went wrong', err)
    })
