// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const MY_DBNAME = 'mongodb://localhost/lab-express-drones';

mongoose.connect(MY_DBNAME);
const drones = [
    {
        name: 'Drone 1SIM',
        propellers: 4,
        maxSpeed: 100
    },
    {
        name: 'Drone 2MUSCLE',
        propellers: 8,
        maxSpeed: 200
    },
    {
        name: 'Drone 3KZDOS',
        propellers: 12,
        maxSpeed: 300   
    }
];

Drone.create(drones, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`${drones.length} drones created`);
    }
    mongoose.connection.close();
}   );

