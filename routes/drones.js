const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel
    .find()
    .then((drones) => {
      res.render('drones/list', { drones })
    })
    .catch((err) => next(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body
  DroneModel
    .create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones')
    })
    .catch((err) => next(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  DroneModel
    .findById(id)
    .then((drone) => {
      res.render('drones/update-form', drone)
    })
    .catch((err) => next(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  DroneModel
    .findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => {
      res.redirect('/drones')
    })
    .catch((err) => next(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params
  DroneModel
    .findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch((err) => next(err))
});

module.exports = router;
