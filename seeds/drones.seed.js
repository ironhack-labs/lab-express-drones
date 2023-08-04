const mongoose = require('mongoose')

const Drone = require('./../models/Drone.model')

const drones = [
	{ name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
	{ name: 'Racer 57', propellers: 4, maxSpeed: 20 },
	{ name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
	{ name: 'Pocholo 3000', propellers: 5, maxSpeed: 22 },
]

const connectionString = 'mongodb://127.0.0.1:27017/lab-drones'

mongoose
	.connect(connectionString)
	.then(x => {
		console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
		return Drone.create(drones)
	})
	.then(dronesFromBD => {
		console.log(`Created ${dronesFromBD.length} drones`)
		return mongoose.connection.close()
	})
	.then(() => {
		console.log('DB connection closed!')
	})
	.catch(err => {
		console.log(`An error occurred while creating drones in the DB: ${err}`)
	})
