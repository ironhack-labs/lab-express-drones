const express = require('express');
const router = express.Router();

const droneCtrl = require('../controllers/drone.controller')

router.get('/', droneCtrl.getDrones);

router.get('/create', droneCtrl.createDrones);

router.post('/create', droneCtrl.createDronesForm);

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
