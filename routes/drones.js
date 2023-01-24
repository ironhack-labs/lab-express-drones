const express = require('express');
const router = express.Router();
const droneController = require('../controllers/drone.controller')

// require the Drone model here

router.get('/drones', droneController.list);

router.get('/drones/create', droneController.create);

router.post('/drones/create', droneController.doCreate);

router.get('/drones/:id/edit', droneController.edit);

router.post('/drones/:id/edit', droneController.doEdit);

router.post('/drones/:id/delete', droneController.doDelete);

module.exports = router;
