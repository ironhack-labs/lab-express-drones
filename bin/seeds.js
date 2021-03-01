// Iteration #1
require('./../configs/db.config');

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

const DroneModel = require('./../models/Drone.models');

DroneModel.create(drones)
.then(success => console.log(success, 'perfect'))
.catch(err => console.log(err, 'nop'))