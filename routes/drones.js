const express = require('express');
const router = express.Router();
const droneController = require("./../controllers/droneController")

// require the Drone model here

router.get('/drones', droneController.getAllDrones)

router.get('/drones/create', droneController.viewCreateDrone)
  

router.post('/drones/create', droneController.createDrone)


router.get('/drones/:id/edit', droneController.viewEditDrone)

router.post('/drones/:id/edit', droneController.editDrone)

router.post('/drones/:id/delete', droneController.deleteDrone)

module.exports = router;
