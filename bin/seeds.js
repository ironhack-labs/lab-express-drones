const mongoose = require('mongoose')

const Drone = require('../models/Drone.model')

require('../configs/db.config');

const drones = [
    { name: 'Creeper', propellers: 3, maxSpeed: 17 },
    { name: 'Reaper', propellers: 4, maxSpeed: 20 },
    { name: 'Blaster', propellers: 5, maxSpeed: 23 }
]

Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books: ${err}`))
