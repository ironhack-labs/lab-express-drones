// Iteration #1
const mongoose = require ("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
    { name: "da dude", propellers: 3, maxSpeed: 12 },
    { name: "da boi", propellers: 4, maxSpeed: 20 },
    { name: "da man", propellers: 6, maxSpeed: 18 }
];

async function seeds(){
    try {
        const x = await mongoose.connect(MONGO_URI);
        console.log(`connected to ${x.connections[0].name}`);

        let createdDrones = await Drone.create(drones);
        console.log(`success on creating ${createdDrones.length} drones`);

        x.disconnect();
    } catch (error) {
        console.log(error);
    }
}
