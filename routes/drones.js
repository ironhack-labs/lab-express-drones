const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
    .then(drones => res.render('drones/list', {drones}))
    .catch(e => console.error(e))
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form');
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body) 
    .then(() => res.redirect('/drones') )
    .catch(() => res.redirect('/drones/create'));
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then(drone => res.render('drones/update-form', {drone}))
    .catch(e => console.error(e))
});


router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(
    {_id: req.params.id},
    req.body
  )
  .then(() => res.redirect('/drones') )
  .catch(() => res.redirect(`/drones/${req.params.id}/edit`))
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(
    {_id: req.params.id}
  )
  .then(() => res.redirect('/drones'))
  .catch(() => res.redirect(`/drones/${req.params.id}/edit`))
});

module.exports = router;
