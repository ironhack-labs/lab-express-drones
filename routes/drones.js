const express = require('express');

const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then((allDrones) =>
      res.render('drones/list', {
        allDrones
      })
    )
    .catch((error) => `An error occurred when loading ${error}`)
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;