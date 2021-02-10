// Iteration #1

const mongoose = require('mongoose')
const Drone = require('../models/Drone.model.js')

const DB_NAME = 'DronesDB'

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifieldToppology: true
  })

const drones = [
  {
    name: 'Creeper XL 500', propellers: 3, maxSpeed: 12
  },
  {
    name: 'Racer 57', propellers: 4, maxSpeed: 20
  },
  {
    name: 'Courier 3000i', propellers: 6, maxSpeed:18
  }
]

Drone.create(drones)
  .then((dronesDB) => {
    console.log(`${dronesDB.length} have been added to the DB`)
    mongoose.connection.close()
  })
  .catch((error) => console.log(`An error occurred while creating drones from the DB: ${error}`))