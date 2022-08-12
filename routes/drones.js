const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find().then(drones => {
    res.render('drones/list', {drones})
  })
  .catch(Err => console.log('error', Err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
  .then(() => res.redirect('/drones'))
  .catch(Err => console.log('error', Err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  Drone.findById(req.params.id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body
  Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
  .then(() => res.redirect('/drones'))
  .catch(Err => console.log('error', Err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
  .then(() => res.redirect('/drones'))
  .catch(Err => console.log('error', Err))
});

module.exports = router;
