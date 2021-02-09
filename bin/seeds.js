// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

const DB_NAME = 'express-drones-dev'

mongoose.connect(`mongodb://localhost/${DB_NAME}`,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true
})

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 15 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  Drone.create(drones)
  .then((dronesFromDB) =>{
        console.log(`Created ${dronesFromDB.length} drones`)
        mongoose.connection.close()
  })
  .catch(err => console.log(`Ha ocurrido un error: ${err}`))