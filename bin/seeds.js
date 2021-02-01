// Iteration #1
require("../configs/db.config");
const Drone = require("../models/Drone.model");
const mongoose = require('mongoose');

const drones = [
    {
        name: 'Phantom 4 Pro',
        propellers: 4,
        maxSpeed: '10'
    },
    {
        name: 'Inspire 2',
        propellers: 4,
        maxSpeed: '26'
    },
    {
        name: 'Robotic EVO II ',
        propellers: 4,
        maxSpeed: '22'
    },
]


Drone
.create(drones)
.then(drone => drone.forEach(dron => console.log(`New drone added: ${dron.name}`)))
    .then(() => {
        console.log('Mongoose conection close')
        mongoose.connection.close()
    })
    .catch(error => console.log(error))
.catch(console.log('An error happened while saving a new drone'))



