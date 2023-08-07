// Iteration #1

// Require Mongoose
const mongoose = require('mongoose');

// Require Book Model
const Drone = require('../models/Drone.model.js');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
  {
    name: "Creeper XL 500",
    propellers: 3,
    maxSpeed: 12
  },
  {
    name: "Racer 57",
    propellers: 4,
    maxSpeed: 20
  },
  {
    name: "Courier 3000i",
    propellers: 6,
    maxSpeed: 18
  }
];

async function insertDrones(){
    try{
        // establishing the connection with our DB
        let db = await mongoose.connect(MONGO_URI);

        // feedback regarding our connection
        console.log("Database is now connected");

        let droneCreated = await Drone.create(drones);
        
        // feedback about drones creation
        console.log(`Created ${droneCreated.length} books`);

        // Close the connection
        await mongoose.connection.close();
    }catch(error){
        console.log("An error ocurred while connecting to DB", error);
    }
}

insertDrones();