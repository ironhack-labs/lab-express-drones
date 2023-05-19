const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((allDrones) => {
    res.render('drones/list', {drones: allDrones});
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create({
  name: req.body.theName,
  propellers: req.body.thePropellers,
  maxSpeed: req.body.theSpeed
  })
  .then((response) => {
    res.redirect('/drones')
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then((theDrone) => {
    res.render('drones/update-form', {theDrone: theDrone})
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, {
  name: req.body.theName,
  propellers: req.body.thePropellers,
  maxSpeed: req.body.theSpeed
  })
  .then(() => {
    res.redirect('/drones')
  })
});

router.post('/drones/delete/:id', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/drones')
  })
});

module.exports = router;
