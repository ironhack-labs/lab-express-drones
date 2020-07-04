// Iteration #1

// require database configuration
require('../configs/db.config');

// Import Schema
const Drone = require('../models/Drones.model')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.deleteMany({})
    .then(() => Drone.create(drones))
    .then((dronesFromDb) => {
        console.log('Insert to BBDD', dronesFromDb)
    })
    .catch(error => console.log('An error happened while insert drones:', error));