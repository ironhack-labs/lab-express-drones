const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  mongoose
  .connect('mongodb://localhost/lab-express-drones', {userNewParser: true})
  .then(x => {
    console.log(`Connected to DB! Name is: "${x.connections[0].name}"`)
    return Drone.create(drones)
  })
  .then(data => {
      console.log(data)
      mongoose.disconnect()
  })
  .catch(err => {
      console.log('there is an error', err)
  })