const mongoose = require('mongoose');
require('../configs/db.config')

// Iteration #1
let drones = [
    { name :"General Atomics MQ-9 Reaper", propellers :4 ,maxSpeed : 18},
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];


let DroneModel = require('../models/drone.model');

DroneModel.create(drones)
    .then((drone)=>{console.log('Added',{drone})})
    .catch(()=>{console.log('Something went wrong')})
        .then(()=>{mongoose.disconnect});