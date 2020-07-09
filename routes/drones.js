const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model');

const router = express.Router();

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
  Drone.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    (err) => {
      if (err) {
        res.redirect(`/drones/${req.params.id}/edit`)
      }
      res.redirect('/drones')
    }
  )
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findOneAndDelete(
    {_id: req.params.id},
    (err) => {
      if (err) {
        next(err);
      }
      res.redirect('/drones')
    }
  )
});

module.exports = router;
