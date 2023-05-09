// Iteration #1
const mongoose = require("mongoose");

const Drone = require("../models/Drone.model.js");

//Protecting the database
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

//Array of drones

const drones = [
  {
    name: "Aquarius",
    propellers: 4,
    maxSpeed: 24,
  },
  {
    name: "Titane",
    propellers: 8,
    maxSpeed: 42,
  },
  {
    name: "Tar",
    propellers: 6,
    maxSpeed: 38,
  },
];

async function insertDrones() {
    try {
      let db = await mongoose.connect(MONGO_URI);
      // Feedback about the connection
      console.log(`Connected to Mongo Database: ${db.connections[0].name}`);
      
      let dronesCreated = await Drone.create(drones);
      console.log(`Created ${dronesCreated.length} drones!`);
      
      //Closing the connection
      await mongoose.connection.close();
    } catch (error) {
      console.log("An error occurred while connecting to Db", error);
    }
  }
  insertDrones();
