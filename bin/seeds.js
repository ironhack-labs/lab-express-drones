// Iteration #1
const mongoose = require('mongoose');
require('../configs/db.config')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  DroneModel.create(drones)
    .then((res) => {
        console.log(res) 
    })
    .catch(() => {
        console.log('Error')
    })
   
