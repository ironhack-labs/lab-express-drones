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
  const {id} = req.params;
  Drone.findById(id)
  .then(droneToEdit =>{
    console.log(droneToEdit)
    res.render(`drones/update-form.hbs`,{drone:droneToEdit})
  })
  .catch(e => {
    console.log("error finding drone", e);
    next(e);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect(`/drones`)) 
    .catch(error => next(error));
});


// Iteration #5
router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
