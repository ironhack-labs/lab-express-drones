const {
  mongooseClose,
  mongooseConnect,
  mongooseDropCollection,
} = require('../db/index');
const Drone = require('../models/Drone.model');
const dronesData = require('./drones.data');

async function seedDrones() {
  try {
    await mongooseConnect();
    await mongooseDropCollection();
    const drones = await Drone.insertMany(dronesData);
    console.log('drones', drones);
    await mongooseClose();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

seedDrones();
