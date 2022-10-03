const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
   DroneModel.find()
   .then(dronesFromDB => {
    res.render("drones/list", {dronesArray: dronesFromDB})
   })
   .catch( err => {
    console.log("error getting drones from DB", err);
    next();
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }

  DroneModel.create(droneDetails)
  .then( droneDetails => {
    res.redirect("/drones")
  })
  .catch( err => {
    console.log("error creating new drone in DB", err);
    next();
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
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
