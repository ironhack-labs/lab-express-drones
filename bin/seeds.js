require('dotenv').config()
require('../configs/db.config')
const Drone = require('../models/Drone.model')

// Iteration #1
const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(drones)
    .then(console.log(`Drones added successfully`))
    .catch(e => console.log(`An error has occurred while trying to add drones`, e))