const router = require("../routes/drones");
const Drone = require('../models/Drone')
const mongoose = require('mongoose');
require('../configs/db.config');


// Iteration #1
const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone
    .create(drones)
    .then(result => {
        console.log(result.length)
        mongoose
            .disconnect()
            .then(() => {
                console.log(`DB disconnected`)
            })
            .catch(err => {
                console.log(err)
            })
    })
    .catch(err => {
        console.log(err)
    })