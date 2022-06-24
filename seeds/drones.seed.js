const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

const MONGO_URI = 'mongodb://localhost/dronesDB'
mongoose
    .connect(MONGO_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo: ", err))

const drones = [
    {
        name: 'Quadcopter',
        propellers: 4,
        maxSpeed: 22
    },
    {
        name: 'Rpv Maker',
        propellers: 6,
        maxSpeed: 36
    },
    {
        name: 'Sky Flyer Drones',
        propellers: 6,
        maxSpeed: 28
    }
]

Drone
    .create(drones)
    .then(droneFromDB => {
        console.log(droneFromDB)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));