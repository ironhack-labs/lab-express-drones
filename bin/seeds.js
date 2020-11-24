const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

mongoose
    .connect('mongodb://localhost/express-drones', {
        useNewUrlParser: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    });

// Iteration #1
const drones = [{
        name: "IronDrone",
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: "DroneHack",
        propellers: 2,
        maxSpeed: 15
    },
    {
        name: "SirDrone",
        propellers: 3,
        maxSpeed: 10
    }
];

Drone.create(drones)
    .then((dronesFromDB) => {
        console.log(`Total drones created: ${dronesFromDB.length}`);
        mongoose.connection.close();
    })
    .catch((error) => console.log(`Could not create the drones due to an error ${error}`));