const express = require('express');
const router = express.Router();
const droneController	= require("./../controllers/droneController")


// require the Drone model here

router.get("/drones", droneController.getDrones)
  // Iteration #2: List the drones
 



  router.get("/drones/create", droneController.createDrones)
  // Iteration #3: Add a new drone
  // ... your code here


  router.post("/drones/create", droneController.createDronesForm)
  // Iteration #3: Add a new drone
  // ... your code here


  router.get("/drones/:id/edit", droneController.editDrone)
  // Iteration #4: Update the drone
  // ... your code here


  router.post("/drones/:id/edit", droneController.editDroneForms)   
  // Iteration #4: Update the drone
  // ... your code here


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
