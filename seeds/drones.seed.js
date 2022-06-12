const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')
const MongoDB = "mongodb://localhost/lab-express-drones"

mongoose.connect(MongoDB)

const drones = [
  {name:'General Atomics', propellers:6, maxSpeed: 14},
  {name:'TurboDrone', propellers:4, maxSpeed: 12},
  {name:'SpeedHawk', propellers:2, maxSpeed: 18}
];

Drone.create(drones)
  .then(dronesDB => {
    console.log(`Created ${dronesDB.length} drones`)
    mongoose.connection.close();
  })
  .catch(err => console.log(`Error while trying to create drones`, err))