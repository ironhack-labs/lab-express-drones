// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


async function seed() {
    try {
      //connect
      await mongoose.connect(MONGO_URI)
  // To create the module in the databa base -> use the module name then inside the () the variable
      let dbDrones = await Drone.create(drones)
      console.log(`Created ${dbDrones.length} drones on the DB`)
      
      //disconnect
      mongoose.connect.close();
    } catch (error) {
      console.log(error);
    }
  }
  seed();