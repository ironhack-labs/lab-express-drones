const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res) => {
	// Iteration #2: List the drones
	Drone.find()
		.then((drones) => {
			res.render("drones/list", { drones });
		})
		.catch((err) => console.log(err));
});

router.get("/drones/create", (req, res) => {
	// Iteration #3: Add a new drone
	res.render("drones/create-form");
});

router.post("/drones/create", (req, res) => {
	// Iteration #3: Add a new drone
	const { name, propellers, maxSpeed } = req.body;

	Drone.create({ name, propellers, maxSpeed })
		.then(() => {
			res.redirect("/drones");
		})
		.catch((err) => console.log(err));
});

router.get("/drones/:drone_id/edit", (req, res) => {
	// Iteration #4: Update the drone
	const { drone_id } = req.params;

	Drone.findById(drone_id).then((drone) => {
		res.render("drones/update-form", drone);
	});
});

router.post("/drones/:drone_id/edit", (req, res) => {
	// Iteration #4: Update the drone

	const { name, propellers, maxSpeed } = req.body;
	const { drone_id } = req.params;

	Drone.findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
		.then(() => {
			res.redirect(`/drones`);
		})
		.catch((err) => console.log(err));
});

router.post("/drones/:drone_id/delete", (req, res) => {
	// Iteration #5: Delete the drone

	const { drone_id } = req.params;

	Drone.findByIdAndDelete(drone_id)
		.then(() => {
			res.redirect("/drones");
		})
		.catch((err) => console.log(err));
});

module.exports = router;
