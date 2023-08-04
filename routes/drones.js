const express = require('express')
const router = express.Router()

// require the Drone model here
const Drone = require('./../models/Drone.model')

router.get('/drones', (req, res, next) => {
	Drone.find()
		.then(dronesFromDB => res.render('drones/list', { drones: dronesFromDB }))
		.catch(error => console.log(error))
})

router.get('/drones/create', (req, res, next) => {
	res.render('drones/create-form')
})

router.post('/drones/create', (req, res, next) => {
	const { name, propellers, maxSpeed } = req.body

	Drone.create({ name, propellers, maxSpeed })
		.then(res.redirect('/drones'))
		.catch(res.redirect('/drones/create'))
})

router.get('/drones/:id/edit', (req, res, next) => {
	const { id } = req.params
	Drone.findById(id).then(droneFound => res.render('drones/update-form', droneFound))
})

router.post('/drones/:id/edit', (req, res, next) => {
	const { id } = req.params
	const { name, propellers, maxSpeed } = req.body

	Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
		.then(res.redirect('/drones'))
		.catch(res.redirect(`/drones/${id}/edit`))
})

router.post('/drones/:id/delete', (req, res, next) => {
	const { id } = req.params

	Drone.findByIdAndDelete(id)
		.then(res.redirect('/drones'))
		.catch(error => console.log(error))
})

module.exports = router
