require('../configs/db.config')
const mongoose = require('mongoose');
// Iteration #1
const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];
  
  const DroneModel = require('../models/Drone.model')
  DroneModel.create(drones)
    .then( res => {
        console.log('Succes', res)
    })
    .catch( err => {
        console.log('Error', err)
    })
    .finally(() => {
        mongoose.connection.close()
    })