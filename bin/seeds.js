const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

require('../configs/db.config');

const drones = [
    {
    name: 'Terminator',
    propellers: 19,
    maxSpeed: 123
}, {
    name: 'Widelens Wendy',
    propellers: 5,
    maxSpeed: 15
}, {
    name: 'To Infinity And Beyond',
    propellers: 234,
    maxSpeed: 349
}
];

Drone.create(drones)
.then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.connection.close();
})
.catch(error => console.log(`An error occurred while creating drones: ${error}`));

