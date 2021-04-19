const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

router.get("/drones", (req, res, next) => {
	// Iteration #2: List the drones
	Drone.find().then((drones) => {
		res.render("drones/list", { drones });
	});
});

router.get("/drones/create", (req, res, next) => {
	// Iteration #3: Add a new drone
	res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
	// Iteration #3: Add a new drone
	const { name, propellers, maxSpeed } = req.body;

	console.log({ name, propellers, maxSpeed });

	if (!name || !propellers || !maxSpeed) {
		res.render("drones/create-form", { errorMessage: "Fill all the fields" });
	}

	Drone.create({ name, propellers, maxSpeed })
		.then(() => {
			res.redirect("/drones");
		})
		.catch((err) => next(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
	// Iteration #4: Update the drone
	Drone.findById(req.params.id)
    .then((drone) => {
      console.log(req.params.id);
      res.render('drones/update-form', drone);
    })
    .catch(err => next(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
	// Iteration #4: Update the drone
	const { name, propellers, maxSpeed } = req.body;
  const {id} = req.params;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => next(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
	// Iteration #5: Delete the drone
	Drone.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/drones');      
    })
    .catch(err => next(err));
});

module.exports = router;
