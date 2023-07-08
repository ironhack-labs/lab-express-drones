// const express = require('express');
// const router = express.Router();

const router = require('express').Router();
const dronesController = require('../controllers/drones.controller.js');


// require the Drone model here
const Drone = require('../models/Drone.model');

// router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  router.get('/drones', dronesController.listDrones);
// });

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
