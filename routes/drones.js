const express = require('express');
const { findById } = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))
});



router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {

  const { name, propeller, maxSpeed } = req.body

  Drone

    .create({ name, propeller, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => res.redirect('/drones/create'))

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => res.redirect('/drones'))
    .catch(err => res.redirect('/drones/update-form'))

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone

  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

module.exports = router;

