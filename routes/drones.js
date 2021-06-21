const express = require('express');
const router = express.Router();
const droneController = require ('../controllers/drone.controller')
// require the Drone model here

router.get('/drones', droneController.showDrones);

router.get('/drones/create', droneController.createDrones);

router.post('/drones/create', droneController.postNewDrone);

router.get('/drones/:id/edit', droneController.updateDrone);

router.post('/drones/:id/edit', droneController.editDrone);

router.post('/drones/:id/delete', droneController.deleteDrone);

module.exports = router;
