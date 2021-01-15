// Iteration #1

const mongoose = require('mongoose');

require('../configs/db.config');

const Drone = require('../models/Drone.model');

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
    ];

Drone.create(drones)
.then(dronesFromDB => {
    console.log(`${dronesFromDB.length} drones were successfully added to the database.`);

    mongoose.connection.close();
})
.catch(err => console.log(`The seeding of the database was not successful: ${err}`));