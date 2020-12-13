// Iteration #1
const Drone = require("../models/Drone.model");
require('./../configs/db.config');

// Iteration #1
const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

const seedDatabase = async () => {
  try {
    const createdDrones = await Drone.create(drones);
    console.log(`Created ${createdDrones.length} drones`);
    mongoose.connection.close();
  } catch (error) {
    console.log('Error while seeding the database :>> ', error);
  }
}
seedDatabase();