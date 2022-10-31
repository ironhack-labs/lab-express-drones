// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function seeds() {
  try {
    // connecting to the database
    const x = await mongoose.connect(MONGO_URI);
    console.log(`Connected to: ${x.connections[0].name}`);

    //insert the books that are in an array above
    let createdDrones = await Drone.create(drones);
    console.log(`Successfuly created ${createdDrones.length}`);

    // disconnect from the database
    x.disconnect();
  } catch (error) {
    console.log(error);
  }
}

seeds();
