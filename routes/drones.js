const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.model")

const router = express.Router();

const dronesController = require("../controllers/drones.controller")

router.get('/drones', dronesController.list)

router.get('/drones/create', dronesController.create);

router.post('/drones/create', dronesController.doCreate);

router.get('/drones/:id/edit', dronesController.edit);

router.post('/drones/:id/edit', dronesController.doEdit);

router.post('/drones/:id/delete', dronesController.delete);

module.exports = router;
