const mongoose = require('mongoose');

const Drone = require('../models/Drone.model');
const DB_NAME = 'express-drones-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const drones = [{
        name: 'Super 505',
        propellors: 5,
        maxSpeed: 20
    },
    {
        name: 'Flyer 6000',
        propellors: 7,
        maxSpeed: 25
    },
    {
        name: 'Basic Drone',
        propellors: 4,
        maxSpeed: 14
    }
]

Drone.create(drones)
    .then((dronesInDB) => {
        console.log(`Created ${dronesInDB.length} new drones`);
        mongoose.connection.close();
    })
    .catch((err) =>
        console.log(`An error occurred while creating the drones ${err}`));