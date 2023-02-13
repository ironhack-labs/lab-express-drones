const express = require('express');
const { findByIdAndUpdate } = require('./../models/Drone.model');
const router = express.Router();

// require the Drone model here
const Drone = require('./../models/Drone.model')

router.get('/drones/list', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, masxSpeed } = req.body
  console.log(req.body)
  Drone
    .create({ name, propellers, masxSpeed }) 
    .then(drone => res.redirect('/drones/list'))
    .catch(err => console.log(err))
});

router.get('/drones/:drone_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { drone_id } = req.params

  Drone
    .findById(drone_id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed, drone_id } = req.body
  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(drone => res.redirect(`/drones/list`))
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { drone_id } = req.params

  Drone
    .findByIdAndDelete(drone_id)
    .then(() => res.redirect('/drones/list'))
    .catch(err => console.log(err))
});
// console.log(drone_id)

module.exports = router;
