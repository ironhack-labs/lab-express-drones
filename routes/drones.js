/** @format */

const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones/", (req, res, next) => {
	// Iteration #2: List the drones
	Drone.find()
		.then((dronesFromDB) => {
			const data = {
				drones: dronesFromDB,
			};
			res.render("drones/list", data);
		})
		.catch((e) => {
			console.log("error getting list of books from DB", e);
			next(e);
		});
});

router.get("/drones/create", (req, res, next) => {
	// Iteration #3: Add a new drone
	res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
	// Iteration #3: Add a new drone
	const newDrone = {
		name: req.body.name,
		propellers: req.body.propellers,
		maxSpeed: req.body.maxSpeed,
	};

	Drone.create(newDrone)
		.then((newDrone) => {
			res.redirect("/drones");
		})
		.catch((e) => {
			console.log("error creating new drone", e);
			next(e);
		});
});

router.get("/drones/:id/edit", (req, res, next) => {
	const id = req.params.id;
	// Iteration #4: Update the drone

	// ... your code here
	Drone.findById(id)
		.then((droneToEdit) => {
			res.render("drones/update-form.hbs", { drone: droneToEdit });
		})
		.catch((error) => console.log(`error on updating the drone`, error));
});

router.post("/drones/:id/edit", (req, res, next) => {
	// Iteration #4: Update the drone
	const id = req.params.id;

	const { name, propellers, maxSpeed } = req.body;

	Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
		.then((droneUpdated) => {
			res.redirect(`/drones`);
		})
		.catch((error) => {
			console.log(`error on find and update the drone`), error;
		});

	// ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
	const id = req.params.id;
	// Iteration #5: Delete the drone
	Drone.findByIdAndRemove(id)
		.then(() => {
			res.redirect(`/drones`);
		})
		.catch((error) => {
			console.log(`error on find and delete the drone`), error;
		});
});

module.exports = router;
