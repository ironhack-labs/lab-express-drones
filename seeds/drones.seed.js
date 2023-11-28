// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const dronesData = require('../constants/dronesData');
require('../db/index');

mongoose.connection.once('connected', () => {
    mongoose.connection.dropDatabase()
    .then(() => {
        console.log('DB has been cleared');
    })
    .then(() => {
        return Drone.create(dronesData);
    })
    .then((dronesDB) => {
        dronesDB.forEach(drone => console.log(drone))
    })
    .catch(err => console.error(err))
    .finally(() => {
        // Cerrar la conexión y parar la ejecución del script
        mongoose.connection.close()
          .then(() => {
            console.log('End of seeds');
          })
          .catch(err => console.error(err))
          .finally(() => {
            process.exit(0)
          })
      })
  })