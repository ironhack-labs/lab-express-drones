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

router.post('/drones/create', droneController.doCreate);
  // Iteration #3: Add a new drone
  // ... your code here

router.get('/drones/:id/edit', droneController.edit);
  // Iteration #4: Update the drone
  // ... your code here

router.post('/drones/:id/edit', droneController.doEdit)
  // Iteration #4: Update the drone
  // ... your code here


  router.get("/drones/:id/delete", droneController.delete);
  router.post("/drones/:id/delete", droneController.doDelete);
  // Iteration #5: Delete the drone
  // ... your code here

module.exports = router;
