// Iteration #1
// Require Mongoose
const mongoose  = require('mongoose');

// Require Drone Model
const Drone= require('../models/Drone.model.js');
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";


const drones = [
    {
        name: "Super Drone",
        propellers: 5,
        maxSpeed: 250,
    },
    {
        name: "Mega Drone",
        propellers: 6,
        maxSpeed: 350,
    },
    {
        name: "Uber Drone",
        propellers: 6,
        maxSpeed: 800,
    }
    
];




// Establish a connection to the database. You can use the same code in db/index.js.
// Once the database connection is established, call the Drone model's .create() method with the array as an argument.
//Adding async await

async function insertDrones() {
    try {
        // Establishing the connection with our DB
        let db = await mongoose.connect(MONGO_URI);

        // Feedback regarding our connection
        console.log("Database is connected");

        // Create drones in our db with the seeds array
        let dronesCreated = await Drone.create(drones);
        console.log(drones)

        // Feedback about drones creation
        console.log(`Created ${dronesCreated.length} drones!`);

        // Close the connection
        await mongoose.connection.close();

    } catch (error) {
        console.log("An error occurred while connecting to DB", error);
    }
}

insertDrones();