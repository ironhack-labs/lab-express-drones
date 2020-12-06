// Iteration #1
const Drone = require("../models/Drone.model");
const connectDb = require("../configs/db.config")
const mongoose = require("mongoose")

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

async function seed() {
    try {
        connectDb();
        const newDrones = await Drone.create(drones);
        console.log(newDrones)
        mongoose.connection.close()
    } catch (err) {
        console.error(err)
    }
}

seed();