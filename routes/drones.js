const express = require('express');
const router = express.Router();
const droneController = require("../controllers/drone.controller");

router.get('/drones', droneController.listDrones);
router.get('/drones/create', droneController.createDrone);
router.post('/drones/create', droneController.doCreateDrone);
router.get('/drones/:id/edit', droneController.editDrone);
router.post('/drones/:id/edit', droneController.doEditDrone);
router.post('/drones/:id/delete', droneController.deleteDrone);

module.exports = router;
