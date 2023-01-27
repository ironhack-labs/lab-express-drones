const express = require('express');
const router = express.Router();
const droneController = require("../controllers/drones.controller");

// require the Drone model here

router.get('/drones',  droneController.list );

router.get('/drones/create', droneController.create);

router.post('/drones/create', droneController.doCreate);

router.get('/drones/:id/edit', droneController.update);

router.post('/drones/:id/edit', droneController.doUpdate);

router.post('/drones/:id/delete', droneController.delete);

module.exports = router;
