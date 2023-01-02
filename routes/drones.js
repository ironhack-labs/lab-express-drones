const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then( dronesFromDB => {
      res.render("drones/list", {drones: dronesFromDB}); 
    })
    .catch(err => {
      console.log("error getting books from DB", err)
      next();
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(droneDetails)
    .then( droneDetails => {
      res.redirect("/drones")
    })
    .catch( err => {
      console.log("error getting drone details from DB", err);
      next();
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
 
  Drone.findById(id)
    .then(droneToEdit => {
      res.render("drones/update-form", droneToEdit)
    })
    .catch( err => {
      console.log("error getting drone details from DB", err);
      next()
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  const newDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
 
  Drone.findByIdAndUpdate(id, newDetails)
    .then(() => {
      res.redirect(`/drones`)
    }) 
    .catch(err => {
      console.log("error getting drone details from DB", err);
      next()
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
