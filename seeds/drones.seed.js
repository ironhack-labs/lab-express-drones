// Iteration #1
const mongoose = require('mongoose')


const drones = [
    {
        name: "Super Drony",
        propellers: 2,
        maxSpeed: 14,
    },
    {
        name: "Platinum Shell",
        propellers: 8,
        maxSpeed: 50,
    },
    {
        name: "Cheapery",
        propellers: 1,
        maxSpeed: 8,
    }
]

mongoose
  .connect('mongodb://localhost/lab-express-drones')
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const Drone = require('../models/Drone.model');

  Drone.insertMany(drones)
    .then(drones => {
        console.log('created entries: ', drones)
        mongoose.disconnect()
    })