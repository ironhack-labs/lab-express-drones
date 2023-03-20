const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

// Iteration #2
router.get('/drones', (req, res, next) => {
  Drone.find()
		.then((dronesArr) => {
			const data = { drones: dronesArr };
			res.render("drones/list", data);
		})
		.catch((e) => {
			console.log("error getting drone from DB", e);
			next(e);
		});
});


// Iteration #3
router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  console.log(req)
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(droneDetails)
  .then(droneFromDB => {
    res.redirect("/drones");
  })
  .catch(e => {
    console.log("error", e)
    next(e);
  });
});

// Iteration #4
router.get('/drones/:id/edit', (req, res, next) => {
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
