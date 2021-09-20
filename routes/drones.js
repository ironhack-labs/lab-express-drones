const express = require('express');
const router = express.Router();

const droneController    = require("../controllers/droneController")

// require the Drone model here
router.get("/drones", droneController.listDrones);

router.get('/drones/create', droneController.create);

router.post('/drones/create', droneController.createDrone);

/*
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});
*/

router.post('/drones/:id/delete', droneController.deleteDrone);

module.exports = router;
