// Connect to the db
// Insert an array of drones

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://caiomazur:ironhack@cluster0.m24i5xu.mongodb.net/lab-express-drones?retryWrites=true&w=majority";

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function seed() {
  try {
    // connect
    await mongoose.connect(MONGO_URI);
    //insert the drones
    let dbDrones = await Drone.create(drones);
    //Check if it works
    console.log(`Created ${dbDrones.length} Drones on the DB`);

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

seed();
