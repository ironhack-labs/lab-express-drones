const express = require('express');
const router = express.Router();
const droneController = require('../controllers/droneController')

// require the Drone model here

router.get('/drones', droneController.getDrones)

router.get('/drones/create', droneController.createDroneRender);
router.post('/drones/create', droneController.createDroneForm);

router.get('/drones/:droneID/edit', droneController.editDroneRender);

router.post('/drones/:droneID/edit', droneController.editDroneForm);

router.post('/drones/:droneID/delete', droneController.deleteDrone);

module.exports = router;
