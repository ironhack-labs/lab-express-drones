const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

require('../db');

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
];

const addDronesToDb = async (theDrones = drones) => {
  try {
    const results = await Drone.create(theDrones);
    mongoose.connection.close();
    console.log(`Added ${results.length} drones to the Database`);
  } catch (err) {
    console.log(err);
  }
};

addDronesToDb();
