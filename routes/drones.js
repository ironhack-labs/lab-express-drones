const express = require('express');
const router = express.Router();

// Import Drone model
const Drone = require('../models/Drone.model');

// GET /drones - List all drones
// Iteration #2: List the drones
router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(allDrones => {
      res.render('drones/list', { drones: allDrones });
    })
    .catch(err => {
      console.log('Error retrieving drones:', err);
      next(err);
    });
});

// GET /drones/create - Show form to create a new drone
// Iteration #3: Add a new drone
router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

// POST /drones/create - Add a new drone
// Iteration #3: Add a new drone
router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => res.render('drones/create-form', { error: err }));
});

// GET /drones/:id/edit - Show form to edit a specific drone
// Iteration #4: Update the drone
router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then(drone => res.render('drones/update-form', { drone }))
    .catch(err => console.log('Error while getting the drone from DB:', err));
});

// POST /drones/:id/edit - Update a specific drone
// Iteration #4: Update the drone
router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect('/drones'))
    .catch(err => res.render('drones/update-form', { drone: { _id: id, name, propellers, maxSpeed }, error: err }));
});

// POST /drones/:id/delete - Delete a specific drone
// Iteration #5: Delete the drone
router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('Error while deleting the drone:', err));
});

module.exports = router;
