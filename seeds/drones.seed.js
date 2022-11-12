// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = 'mongodb://localhost/lab-express-drones'

mongoose
    .connect(MONGO_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo: ", err))

const alldrones = [
    {
        name: 'Gallina',
        propellers: 1,
        maxSpeed: 2,
    },
    {
        name: 'Buitre',
        propellers: 2,
        maxSpeed: 10,
    },
    {
        name: 'Halcón',
        propellers: 10,
        maxSpeed: 100,
    },
];

Drone
    .create(alldrones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));