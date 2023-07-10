const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require ('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(drones => {
      res.render('drones/drones', { drones });
    })
    .catch(err => next(err));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
  .then(() => {
    res.redirect('/drones');
  })
    .catch(err => next(err));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drone.findById(id)
    .then((drone) => {
      res.render('drones/update-form', { drone });
    })
    .catch(err => next(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drone.findByIdAndUpdate(id, req.body, { new: true })
    .then(drone => {
      res.redirect('/drones');
    })
    .catch(err => next(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => next(err));
});

module.exports = router;
