const mongoose = require('mongoose');
const Drones = require('../models/Drone.model.js');

const drones = [
    {
        name: '1',
        propellers: 1,
        maxSpeed: 3
    },
    {
        name: '2',
        propellers: 2,
        maxSpeed: 22
    },
    {
        name: '3',
        propellers: 3,
        maxSpeed: 34
    }
]

require('../configs/db.config');

Drones.insertMany(drones)
    .then(drone => {
        console.log(drone)
    })
    .catch(err => {
        console.log(err)
    });