// Iteration #1

const mongoose = require('mongoose');


const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

require('../configs/db.config')

const Drone = require('../models/Drone.model')

  Drone.create(drones)
    .then(createdDrones => console.log(`${createdDrones.length} drones created!`))
    .catch(error => console.log(`Error while creating a new drone: ${error}`))
    .finally(mongoose.connection.close()) 