const express = require('express');
const router = express.Router();

const drones = require('../controllers/drones.controller')

// require the Drone model here

router.get('/', drones.list);

router.get('/drones/create', drones.create);
router.post('/drones/create', drones.doCreate);

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
