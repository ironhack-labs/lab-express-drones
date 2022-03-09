const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones: drones });
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then((drone) => {
      res.redirect('/drones');
    })
    .catch(() => {
      res.render('drones/create-form');
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render('drones/update-form', drone);
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/drones');
    })
    .catch(() => {
      res.render(`drones/${req.params.id}/edit`);
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/drones');
    })
    .catch((e) => next(e));
});

module.exports = router;