// Iteration #1
// To insert in "seeds/drones.seed.js"

// to solve the mongoose problem that is not defined here but in the /db/index.js
const mongoose = require('mongoose');
// To create the DB
// node ./seeds/drones.seed.js
const drones = [
	{ name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
	{ name: 'Racer 57', propellers: 4, maxSpeed: 20 },
	{ name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

require('dotenv/config');
require('../db');

const Drone = require('./../models/Drone.model');

Drone.create(drones)
	.then((dronesFromDB) => {
		console.log(`Created ${dronesFromDB.length} drones into the DB`);
		mongoose.connection.close();
	})
	.catch((err) => console.log(`An error occurred while creating drones from the DB: ${err}`));
