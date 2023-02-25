// Iteration #1
const mongoose = require('mongoose')
const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lab-express-drones'
const Drone = require('../models/Drone.model')

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
]

mongoose
  .connect(MONGO_URI)
  .then(async (x) => {
    try {
      const dbName = x.connections[0].name
      console.log(`Connected to Mongo! Database name: "${dbName}"`)
      await Drone.deleteMany()
      await Drone.create(drones)
      await mongoose.disconnect()
      console.log('Disconnected after creating drones')
    } catch (error) {
      console.error(error)
    }
  })
  .catch((err) => {
    console.error('Error connecting to mongo: ', err)
  })
