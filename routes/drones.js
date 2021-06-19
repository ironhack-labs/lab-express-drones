const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");
const droneController = require("../controllers/drones.controllers")

router.get('/drones', droneController.listDrones);

router.get('/drones/create', droneController.createDrone);

router.post('/drones/create', droneController.doCreateDrone);

router.get('/drones/:id/edit', droneController.updateDrone);

router.post('/drones/:id/edit', droneController.doUpdateDrone);

router.post('/drones/:id/delete', droneController.doDeleteDrone);

module.exports = router;
