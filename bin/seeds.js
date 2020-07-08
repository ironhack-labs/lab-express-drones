// Iteration #1
const mongoose = require('mongoose');
const Drone = require("../models/Drone.model")

require('../configs/db.config');

const drones = [
    {name: "Rato que Avoa", propellers: 4, maxSpeed: 100 },
    {name: "Ronaldinho", propellers: 8, maxSpeed: 400 },
    {name: "RubinMac", propellers: 4, maxSpeed: 200 },
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => 
        console.log(`An error occurred while getting movies from the DB: ${err}`)    
);