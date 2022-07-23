// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
const DRONES = require('../seeds/seeds.json')

// Conectarme a la base de datos

require('../db')

// Vaciarla

mongoose.connection.once('open', () => {
  mongoose.connection.db.dropDatabase()
    .then(() => {
      console.info('Db dropped')

      return Drone.create(DRONES)
    })
    .then(createdDrones => {
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