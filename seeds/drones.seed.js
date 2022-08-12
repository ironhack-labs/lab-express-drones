// Iteration #1
require('../db');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  const Drone = require('../models/Drone.model');

  Drone.create(drones)
  .then(()=>mongoose.connection.close())
  .catch(error => 
    console.error('Error connecting to the database', error));