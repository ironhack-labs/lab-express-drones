// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model');
require('../config/db.config')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose.connection.once('open', () => {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);
  
    mongoose.connection.db
      .dropDatabase()
      .then(() => {
        console.info('Db has been cleared')
  
        return Drone.create(drones)
      })
      .then(dronesCreated => {
        dronesCreated.forEach(drone => {
          console.log(`Drone ${drone.name} has been created`)
        })
        console.log(`A total of ${drones.length} drones has been created`)
      })
      .catch(err => console.error(err))
      .finally(() => {
        mongoose.connection.close(function () {
          console.log("Mongoose disconnected");
          process.exit(0);
        });
      })
  })
