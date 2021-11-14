const express = require('express')
const router = express.Router()
const Drone = require('../models/Drone.model')

/**
 * Action vs HTTP VERB
 *
 * create === POST
 * read === GET
 * update === PUT / PATCH
 * delete === DELETE
 */

// require the Drone model here

router.get('/drones', (req, res, next) => {
	// Iteration #2: List the drones
	Drone.find().then((drones) => {
		res.render('drones/list', { drones })
	})
})

router.get('/drones/create', (req, res, next) => {
	res.render('drones/create-form')
})

router.post('/drones/create', (req, res, next) => {
	// Iteration #3: Add a new drone
	const drone = req.body
	Drone.create(drone)
		.then(() => res.redirect('/drones'))
		.catch(() => next(err))
})

router.get('/drones/:id/edit', (req, res, next) => {
	// Iteration #4: Update the drone
	const id = req.params.id
	Drone.findById(id)
		.then((drone) => {
			res.render('drones/update-form', { drone })
		})
		.catch(() => next(err))
})

router.post('/drones/:id/edit', (req, res, next) => {
	// Iteration #4: Update the drone
	const drone = req.body
	const id = req.params.id
	Drone.findByIdAndUpdate(id, drone)
		.then(() => res.redirect('/drones'))
		.catch(() => next(err))
})

router.post('/drones/:id/delete', (req, res, next) => {
	// Iteration #5: Delete the drone
	const id = req.params.id
	Drone.findByIdAndDelete(id)
		.then(() => res.redirect('/drones'))
		.catch(() => next(err))
})

module.exports = router
