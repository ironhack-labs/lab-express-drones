// Iteration #1
const connectionPromise = require('../db')
const Drone = require('../models/Drone.model')

const droneSeeds = [
	{ name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
	{ name: 'Racer 57', propellers: 4, maxSpeed: 20 },
	{ name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
]

connectionPromise.then(() => {
	Drone.create(droneSeeds)
		.then(() => {
			console.log(`Drones ${JSON.stringify(droneSeeds)} successfully seeeded.`)
		})
		.catch((err) => {
			console.error('Error in seeding of drones! ', err)
		})
		.then(() => {
			process.exit()
		})
})
