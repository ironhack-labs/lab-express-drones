const droneArray = [
    {
        name: 'Skyline Drone',
        propellers: 4,
        maxSpeed: 110
    },
    {
        name: 'Arclight',
        propellers: 6,
        maxSpeed: 85
    },
    {
        name: 'Eagle Eye',
        propellers: 4,
        maxSpeed: 80
    }
];

const mongoose = require('mongoose');

const Drone = require('../models/Drone.model');
const connectdb = require('../db/index');

require('dotenv').config()

connectdb()

const createDrones = async (data) => {
    try {
        const createdDrones = await Drone.create(data);
        console.log(createdDrones);
        return mongoose.connection.close()
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

createDrones(droneArray);
