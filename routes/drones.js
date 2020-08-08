const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2.1: List the drones
  Drone.find({})
    .then(drones => res.render('drones/list', {drones}))
    .catch(e => console.error(e))
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3.1: Add a new drone
  // ... your code here
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3.1: Add a new drone
  // ... your code here
  Drone.create(req.body) 
  .then(() => res.redirect('/drones') )
  .catch(() => res.redirect('/drones/create'));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4.2: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
    .then(drone => res.render('drones/update-form', {drone}))
    .catch(e => console.error(e))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4.4: Update the drone
  // ... your code here
  Drone.findByIdAndUpdate(
    {_id: req.params.id},
    req.body
  )
  .then(() => res.redirect('/drones') )
  .catch(() => res.redirect(`/drones/${req.params.id}/edit`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(
    {_id: req.params.id}
  )
  .then(() => res.redirect('/drones'))
  .catch(() => res.redirect(`/drones/${req.params.id}/edit`))
});

module.exports = router;
