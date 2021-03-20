// Iteration #1
const drones = [
    {
        name: 'Ovni',
        propellers: 2,
        maxSpeed:10
    },
    {
        name: 'Dr. one',
        propellers: 1,
        maxSpeed:12
    },
    {
        name: 'Steve',
        propellers: 4,
        maxSpeed:8
    }
]

const mongoose = require('mongoose');

const Drones = require('../models/Drone.model.js');

require('../configs/db.config')

Drones.insertMany(drones)
.then(droneCreated => {
    console.log(droneCreated)
})
.catch(error => {
    console.log(error)
})

