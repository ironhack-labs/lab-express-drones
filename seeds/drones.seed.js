// Iteration #1
const DRONES = require("../data/drone.json");
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

//conectarse a la base de datos
require('../config/db.config');

// Vaciarla
mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
      .then(() => {
        //console.info('Db dropped')

        return Drone.create(DRONES)
      })
      .then(createdDrones => {
        console.log('📗 📖 Creating Drones...')
        createdDrones.forEach(drone => console.log(`${drone.name} was created`))
  
        // Cerrar la conexion
        return mongoose.connection.close()
      })
      .then(() => {
        console.log('Connection closed')
        process.exit(1)
      })
      .catch(err => {
        console.error(err)
        process.exit(0)
      })
  })