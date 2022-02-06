const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/drones'

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
]

mongoose
  .connect(MONGO_URI)
  .then((x) => 'Connected')
  .catch((err) => console.log(err))

Drone.create(drones)
  .then((drone) => {
    console.log('Importados ', drone.length)
    mongoose.connection.close()
  })
  .catch((err) => console.log(err))
