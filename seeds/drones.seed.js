// Iteration #1
const mongoose = require("mongoose")
const Dron = require("../models/Drone.model")

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones"

mongoose.connect(MONGO_URI, {})

const drones = [
	{
		name: "Racer 3000",
		propellers: 3,
		maxSpeed: 12,
	},
	{
		name: "Racer 5000",
		propellers: 5,
		maxSpeed: 15,
	},
	{
		name: "Racer 7000",
		propellers: 7,
		maxSpeed: 20,
	},
]

Dron.create(drones)
	.then((dronesList) => {
		console.log("Drones to DB")
	})
	.catch((error) => {
		console.log(`${error} while sending drones to DB`)
	})
