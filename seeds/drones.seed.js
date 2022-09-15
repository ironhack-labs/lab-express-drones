const mongoose = require('mongoose');
const { Drone } = require('../models/Drone.model');
// Iteration #1
const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
  { name: 'Creeper XXL 400', propellers: 8, maxSpeed: 36 },
  { name: 'Racer 72', propellers: 4, maxSpeed: 6 },
  { name: 'Courier 3600x', propellers: 12, maxSpeed: 36 },
  { name: 'Creeper 600', propellers: 3, maxSpeed: 29 },
  { name: 'Racer 90c', propellers: 16, maxSpeed: 42 },
  { name: 'Courier 200', propellers: 4, maxSpeed: 16 },
];

require('../db');

Drone.create(drones).then((mongoRes) => {
  console.log('Drones created:', mongoRes.length);
  mongoose.connection.close();
});
