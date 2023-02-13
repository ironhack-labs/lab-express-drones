// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
  {
    name: "Animal Farm",
    propellers: "4",
    maxSpeed: "10",
  },
  {
    name: "Gone with the Wind",
    propellers: "4",
    maxSpeed: "20",
  },
  {
    name: "The Fault in Our Stars",
    propellers: "4",
    maxSpeed: "40",
  },
];

async function seed() {
  try {
    //connect
    await mongoose.connect(MONGO_URI);
    //insert the drones
    let dbDrones = await Drone.create(drones);
    //check if it works
    console.log(`Created ${dbDrones.length} drones on the DB`);

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

seed();
