const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");
const droneController = require("../controllers/drones.controllers")

router.get('/drones', droneController.listDrones);

router.get('/drones/create', droneController.createDrone);

router.post('/drones/create', droneController.doCreateDrone);

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
