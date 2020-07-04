// Iteration #1

require('../configs/db.config.js')
const Drone = require('../models/Drone.model.js')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drone.deleteMany({})
  .then(() => Drone.create(drones))
  .then(droneElem => console.log(`You've created ${droneElem.length} drones`))
  .then(() => mongoose.connection.close())
  .catch(err => console.log ('error', err))