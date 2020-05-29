require('./www')
// Iteration #1
const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
    { name: 'DJI Mavic 2 Pro', propellers: 9, maxSpeed: 24 },
    { name: 'DJI Inspire 1', propellers: 2, maxSpeed: 10 },
    { name: 'DT26E LiDAR', propellers: 3, maxSpeed: 21 },
  ];
const DroneModel = require('../models/Drone.model')
DroneModel.create(drones)
  .then( res => {
      console.log('Success..', res)
  })
  .catch( err => {
      console.log('Error:(', err)
  })