const mongoose = require('mongoose');
require('../configs/db.config');
const Drone = require('../models/drone.model');

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drone.create(drones)
  .then(dronesFromDb => {
    console.log(`Created ${dronesFromDb.length} drones`);
    mongoose.connection.close();
  })
  .catch(err => console.error(`An error occurred while creating drones from the DB: ${err}`));