// Iteration #1

// Require Mongoose
const mongoose = require('mongoose');

// Require Drones Model
const Drone = require('../models/Drone.model.js');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones"; 

const drones = [
    {name: "First Drone", propellers: 1, maxSpeed: 10},
    {name: "Second Drone", propellers: 2, maxSpeed: 15},
    {name: "Third Drone", propellers: 4, maxSpeed: 18}
];

async function insertDrones() {
    try {
        // establishing the connection with our DB
        let db = await mongoose.connect(MONGO_URI);
        console.log("Database is now connected");

        // create drones in our db with the seeds array
        let dronesCreated = await Drone.create(drones);

        // feedback about books creation
        console.log(`Created ${dronesCreated.length} drones!`);

        //Close the connection
        await mongoose.connection.close();
    }
    catch (error){
        console.log("An error acurred while connecting to DB", error);
    }
}

insertDrones();