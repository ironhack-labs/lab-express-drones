const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/', (req, res) => {
	Drone.find()
		.sort({ maxSpeed: -1 })
		.then((drones) => {
			res.render('drones/list', { drones });
		})
		.catch((err) => console.log('Error retrieving Drones from the Database', err));
});

router
	.route('/create')
	.get((req, res) => {
		res.render('drones/create');
	})
	.post((req, res) => {
		const { name, propellers, maxSpeed } = req.body;
		Drone.create({ name, propellers, maxSpeed })
			.then((data) => {
				console.log('New Drone Created: ', data.title);
				res.redirect('/drones');
			})
			.catch((err) => console.log(err));
	});

router.get('/:droneId', (req, res) => {
	Drone.findById(req.params.droneId)
		.then((drone) => res.render('drones/drone', drone))
		.catch((err) => console.log(err));
});

router
	.route('/:droneId/edit')
	.get((req, res) => {
		Drone.findById(req.params.droneId)
			.then((drone) => res.render('drones/edit', drone))
			.catch((err) => console.log(err));
	})
	.post((req, res) => {
		const { name, propellers, maxSpeed } = req.body;
		Drone.findByIdAndUpdate(req.params.droneId, { name, propellers, maxSpeed }, { new: true })
			.then((updatedDrone) => res.redirect(`/drones/${updatedDrone.id}`))
			.catch((err) => console.log(err));
	});

router.post('/:droneId/delete', (req, res) => {
	Drone.findByIdAndDelete(req.params.droneId)
		.then((drone) => res.redirect('/drones'))
		.catch((err) => console.log(err));
});

module.exports = router;
