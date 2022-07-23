// Iteration #1

const mongoose = require ('mongoose')
const Drone = require ('../models/Drone.model.js')
const DRONES = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

require('../db/index.js')

mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
      .then(() => {
        console.log('Db dropped')

        return Drone.create(DRONES)
      })
      .then(createdDrones => {
        console.log('Creating Drones')
        createdDrones.forEach(Drone => console.log(`${Drone.name} was created`))
      })
      .then(() => {
        console.log('Connection closed')
        process.exit(1)
      })
      .catch(() => {
        console.error('!')
        process.exit(0)
      })
})