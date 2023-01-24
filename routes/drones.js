const express = require('express');
const router = express.Router();

// require the Drone model here

router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
