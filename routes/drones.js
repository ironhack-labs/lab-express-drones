const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
	// Iteration #2: List the drones
	// ... your code here
	Drone.find()
		.then((droneDB) => {
			const data = {
				drones: droneDB,
			};
			res.render('drones/list', data);
		})
		.catch((err) => {
			console.log('Where are your drones?');
		});
});

router.get('/drones/create', (req, res, next) => {
	// Iteration #3: Add a new drone
	// ... your code here
});

router.post('/drones/create', (req, res, next) => {
	// Iteration #3: Add a new drone
	// ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
	// Iteration #4: Update the drone
	// ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
	// Iteration #4: Update the drone
	// ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
	// Iteration #5: Delete the drone
	// ... your code here
});

module.exports = router;
