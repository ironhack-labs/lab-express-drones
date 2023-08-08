// Iteration #1
//This code populates the database with drones
const mongoose = require("mongoose");

const Drone = require("../models/Drone.model.js");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function createDrones() {
  try {
    //Establishing the connection with our DB
    let db = await mongoose.connect(MONGO_URI);

    //feedback regarding our connection
    console.log("Database is now connected");

    //create drones in our db with the seeds
    let dronesCreated = await Drone.create(drones);

    //feedback regarding books creation
    console.log(`Created ${dronesCreated.length} drones`);

    //close the connection
    await mongoose.connection.close();

  } catch (error) {
    console.log("An error ocurred while connectiong to the DB", error)
  }
}

createDrones()
