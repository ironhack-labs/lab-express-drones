const mongoose      = require('mongoose');
const Drone         = require('../models/Drone.model.js')

const DB_NAME       = 'express-drones'

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Iteration #1

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drone.create(drones)
  .then(dronesFromDB => {
      console.log(`Created ${dronesFromDB.length} drones`);
    
      mongoose.connection.close()
    }).catch(error => console.log(`An error ocurred while creating drones from the DB: ${error}`))

