// Iteration #1
const mongoose = require('mongoose');
const DroneModel = require('../models/Drone.model')

//require db config
require('../configs/db.config')


const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  //create Model
  DroneModel.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} Drones in the DB`)
        mongoose.connection.close();
    })
    .catch(err=> console.log(`Error while created drones: ${err}`));


    