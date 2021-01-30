const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.model");

const router = express.Router();
const droneController = require("../controllers/drones.controller");
  // Iteration #2: List the drones
    // ... your code here
router.get('/drones', droneController.list);



// Iteration #3: Add a new drone
    // ... your code here
router.get('/drones/create', droneController.create);

router.post('/drones/create', droneController.doCreate);


// Iteration #4: Update the drone
  // ... your code here

  router.get('/drones/:id/edit', droneController.edit);

  router.post('/drones/:id/edit', droneController.doEdit);
   // Iteration #5: Delete the drone
    // ... your code here
  router.post('/drones/:id/delete', droneController.delete);

module.exports = router;
