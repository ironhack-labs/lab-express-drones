// Iteration #1

// Require Mongoose
const mongoose = require('mongoose');

// Require Book Model
const Drone = require('../models/Drone.model.js');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";

const drones = [
    {
      name: "The Hunger",
      propellers: 6,
      maxSpeed: 14
    },
    {
      name: "New Horizon",
      propellers: 4,
      maxSpeed: 16
    },
    {
      name: "Boom Gone",
      propellers: 2,
      maxSpeed: 18
    }
];

async function insertDrones(){
    try{
        let db = await mongoose.connect(MONGO_URI);
        // Feedback about the connection
        console.log(`Connected to Mongo Database: ${db.connections[0].name}`);
        // Create new documents inside drones collection
        let dronesCreated = await Drone.create(drones);
        // Feeback regarding to drones creation
        console.log(`Created ${dronesCreated.length} drones!`); 
        // Closing the connection
        await mongoose.connection.close();
    }
    catch(error){
        console.log('An error occurred while connecting to Db', error);
    }
  }

  insertDrones();
