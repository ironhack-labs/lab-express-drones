const express = require('express');
const router = express.Router();

const droneController = require("../controllers/drone.controller")

// require the Drone model here

router.get('/drones', droneController.showDrones)

router.get("/drones/create", droneController.createDrone)

router.post("/drones/create", droneController.doCreateDrone)

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
