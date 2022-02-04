// Iteration #1

const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")
const connectDB = require("./../db/index")
const async = require("hbs/lib/async")

require("dotenv").config()

connectDB()

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const createDrones = async (data) => {

    try {
        const createdDrones = await Drone.create(data)
        console.log(createdDrones)
    } catch (error) {
        console.log(error)
    }
    return mongoose.connection.close()
}

createDrones(drones)
