// Iteration #1
require('../configs/db.config');
const mongoose = require('mongoose')

const DroneModel = require('../models/Drone.model')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  DroneModel.insertMany(drones)
    .then((result) => {
        console.log(result.length, ' drones successfully inserted to the database');
        mongoose.connection.close()
            .then(() => console.log('Connection closed'))
            .catch((err) => console.log('Something went wrong during disconnection: ',err))
    })
    .catch((err) => console.log(err))
