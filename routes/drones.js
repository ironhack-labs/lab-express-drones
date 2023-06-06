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
	res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
	// Iteration #3: Add a new drone
	// ... your code here
	const newDrone = {
		name: req.body.name,
		propellers: req.body.propellers,
		maxSpeed: req.body.maxSpeed,
	};
	Drone.create(newDrone)
		.then((newDrone) => {
			res.redirect('/drones');
		})
		.catch((e) => {
			console.log('error creating new drone');
		});
});

router.get('/drones/:id/edit', (req, res, next) => {
	const { id } = req.params;
	Drone.findById(id)
		.then((droneEdit) => {
			res.render('drones/update-form.hbs', droneEdit);
		})
		.catch((e) => {
			console.log('Error editing');
		});
});

router.post('/drones/:id/edit', (req, res, next) => {
	// Iteration #4: Update the drone
	// ... your code here
	const { id } = req.params;
	const newDrone = {
		name: req.body.name,
		propellers: req.body.propellers,
		maxSpeed: req.body.maxSpeed,
	};
	Drone.findByIdAndUpdate(id, newDrone, { new: true }).then((updatedDrone) =>
		res.redirect('/drones')
	);
});

router.post('/drones/:id/delete', (req, res, next) => {
	const { id } = req.params;
	Drone.findByIdAndDelete(id)
		.then((id) => {
			res.redirect('/drones');
		})
		.catch((e) => {
			console.log('Error editing');
		});
});

module.exports = router;
