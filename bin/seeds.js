// Iteration #1
require('../configs/db.config')
const mongoose = require('mongoose')

const dronesModel = require('../models/Drone.models')

let dronesArr = [
    {
        name: 'Awesome drone',
        propellers: 4,
        maxSpeed: 10,
    },
    {
        name: 'Batdrone',
        propellers: 5,
        maxSpeed: 15
    },
    {
        name: 'Appa',
        propellers: 2,
        maxSpeed: 8
    }
]

dronesModel.create(dronesArr)
    .then((drones) => {
        console.log('Number of drones created:', drones.length)
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log('An error occurred:', err)
    })
