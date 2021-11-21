// Iteration #1
const Drone = require("../models/Drone.model");

const {
  mongoConnect,
  mongoDrop,
  mongoClose,
} = require("../config/mongoDB.config.js");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function seedDrones() {
  try {
    await mongoConnect();
    await mongoDrop();
    const collection = await Drone.create(drones);
    console.log(`${collection.length} drones were added`)
    await mongoClose();
  } catch (error) {
    console.error(`Error occured while seeding: ${error}`);
  }
}

seedDrones();
