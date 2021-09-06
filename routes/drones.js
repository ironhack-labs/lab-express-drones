const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

// ------------------------------------------------------
// Ruta a /drones, dónde solo hay el listado de drones
router.get('/drones', (req, res, next) => {
	// Iteration #2: List the drones
	// ... your code here
	Drone.find()
		//.count()
		.then((drones) => {
			//console.log('Movies from DB:', JSON.stringify(movies));
			console.log('Drones from DB:', drones);
			//console.log('Lenght of movies from the DB', movies);
			res.render('drones/list', { drones });
			//res.send(JSON.stringify(movies));
		})
		.catch((err) => {
			console.log(err);
		});
});
// ------------------------------------------------------
// GET - Ruta a /drones/create para crear otros drones
router.get('/drones/create', (req, res, next) => {
	// Iteration #3: Add a new drone
	// ... your code here
	res.render('drones/create-form.hbs');
});
// POST - Ruta a /drones/create para crear otros drones
router.post('/drones/create', (req, res, next) => {
	// Iteration #3: Add a new drone
	// ... your code here
	const { name, propellers, maxSpeed } = req.body;

	Drone.create({ name, propellers, maxSpeed })
		// .then(bookFromDB => console.log(`New book created: ${bookFromDB.title}.`))
		.then(() => res.redirect('/drones'))
		.catch((error) => next('Error while creating a drone ->', error));
});
// ------------------------------------------------------
// UPDATE DRONE - GET route to display the form to update a specific dron
// ------------------------------------------------------
router.get('/drones/:id/edit', (req, res, next) => {
	// Iteration #4: Update the drone
	// ... your code here
	const { id } = req.params;

	Drone.findById(id)
		.then((drones) => {
			// console.log(bookToEdit);
			res.render('drones/update-form.hbs', drones); // <-- add this line
		})
		.catch((error) => next('Error while updating a drone ->', error));
});
// ------------------------------------------------------
// UPDATE DRONE - POST route to actually make updates on a specific drone
// ------------------------------------------------------
router.post('/drones/:id/edit', (req, res, next) => {
	// Iteration #4: Update the drone
	// ... your code here
	const { id } = req.params;
	const { name, propellers, maxSpeed } = req.body;

	Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
		.then((updatedDrone) => res.redirect(`/drones`)) // go to the details page to see the updates
		.catch((error) => next('Error while updating a drone ->', error));
});

router.post('/drones/:id/delete', (req, res, next) => {
	// Iteration #5: Delete the drone
	// ... your code here
	const { id } = req.params;

	Drone.findByIdAndDelete(id).then(() => res.redirect('/drones')).catch((error) => next(error));
});

module.exports = router;
