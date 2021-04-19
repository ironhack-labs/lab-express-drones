const mongoose = require('mongoose');
require('../configs/db.config');

const Drone = require("../models/Drone");

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(drones)
.then((result)=>{
    mongoose.connection.close()
    .then((result)=>{
        console.log('Closing database!')
    })
    .catch((err)=>{
        console.log(err)
    })
})