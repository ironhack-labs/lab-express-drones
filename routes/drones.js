const express = require("express")
const Drone = require("../models/Drone.model")
const router = express.Router()

// require the Drone model here

router.get("/drones", (req, res, next) => {
	Drone.find()
		.then((dronesFromDB) => {
			res.render("drones/list.hbs", { drones: dronesFromDB })
		})
		.catch((error) => {
			console.log(`${error} while getting movies from DB`)
		})
})

router.get("/drones/create", (req, res, next) => {
	res.render("drones/create-form.hbs")
})

router.post("/drones/create", (req, res, next) => {
	const { name, propellers, maxSpeed } = req.body

	Drone.create({ name, propellers, maxSpeed })
		.then(() => {
			res.redirect("/drones")
		})
		.catch((error) => next(error))
})

router.get("/drones/:id/edit", (req, res, next) => {
	const id = req.params.id

	Drone.findById(id)
		.then((dronToEdit) => {
			res.render("drones/update-form.hbs", { drone: dronToEdit })
		})
		.catch((error) => next(error))
})

router.post("/drones/:id/edit", (req, res, next) => {
	const { id } = req.params
	const { name, propellers, maxSpeed } = req.body

	Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
		.then(() => {
			res.redirect("/drones")
		})
		.catch((error) => next(error))
})

router.post("/drones/:id/delete", (req, res, next) => {
	const { id } = req.params

	Drone.findByIdAndDelete(id)
		.then(() => res.redirect("/drones"))
		.catch((error) => next(error))
})

module.exports = router
