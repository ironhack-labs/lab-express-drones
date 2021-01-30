// Iteration #1
require('dotenv').config()
require('../configs/db.config');
const Drone = require('../models/Drone.model')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone
    .deleteMany()
    .then(() => console.log('If there was anything in the collection it has been removed'))
    .then(() => {
        Drone
            .create(drones)
            .then((d) => console.log('Drones created:' + d))
    })
    .catch(e => console.log(e))