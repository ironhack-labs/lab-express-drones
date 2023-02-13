// Iteration #1
const mongoose = require ("mongoose")

const Drone = require("../models/Drone.model")

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones"

const drone = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

async function drones() {
    try {
        
        await mongoose.connect(MONGO_URI)

        let dbDrones = await Drone.create(drone) 
        console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close()

    } catch (error) {
        console.log(error);
        
    }
}

drones();

