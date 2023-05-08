// Iteration #1
//Require mongoose
const mongoose = require('mongoose')

//Require drone model
const Drone = require('../models/Drone.model.js')

// Establish connection
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

async function createDrones() {
    try {
        let db = await mongoose.connect(MONGO_URI);
        // Feedback about connection
        // console.log(`Connected to MongoDB: ${db.connections[0].name}`)
        // Create new documents inside drones collection
        let dronesCreated = await Drone.create(drones)
        // Feedback about the drone creation
        // console.log(`Created ${dronesCreated.length} drones!`)
        // Closing the connection
        await mongoose.connection.close();
    }
    catch (error) {
        console.log(error)
    }
}
createDrones()