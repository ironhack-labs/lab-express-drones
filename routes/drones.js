const express = require('express');

// require the Drone model here
const droneController = require('../controllers/drones.controller')


const router = express.Router();

router.get('/drones', droneController.list);
  // Iteration #2: List the drones
  // ... your code here


router.get('/drones/create', droneController.create);
  // Iteration #3: Add a new drone
  // ... your code here

router.post('/drones/create-form', (req, res, next) => {
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
