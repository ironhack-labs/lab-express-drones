const express = require('express');
const router = express.Router();
const droneController = require('./../controllers/droneController')


  // Iteration #2: List drones
router.get('/drones', droneController.getAllDrones);


  // Iteration #3: Create the drone

router.get('/drones/create', droneController.viewCreateDrone);
router.post('/drones/create',droneController.createDrone)



  // Iteration #4: Update the drone

router.get('/drones/:droneID/edit', droneController.viewEditDrone);
router.post('/drones/:droneID/edit', droneController.editDrone);

  // Iteration #5: Delete the drone


router.post('/drones/:droneID/delete',droneController.deleteDrone);

module.exports = router;
