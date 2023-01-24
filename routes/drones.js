const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/drones.controller');

// require the Drone model here

router.get('/drones', dronesController.list);

router.get('/drones/create', dronesController.create);

router.post('/drones/create', dronesController.doCreate);

router.get('/drones/:id/edit', dronesController.update);

router.post('/drones/:id/edit', dronesController.doUpdate);

router.post('/drones/:id/delete', dronesController.delete);

module.exports = router;
