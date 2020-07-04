// Iteration #1
require('../configs/db.config.js')
const mongoose = require('mongoose')

const Drones = require ('../models/drone.model');

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drones.deleteMany({})
  .then (() => Drones.create(drones))
  .then(drones => {
      console.log(`${drones.length} added to the database`);
      mongoose.connection.close()
  })
  .catch(e => console.log('Error: ', e))


