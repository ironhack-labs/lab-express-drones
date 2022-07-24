const express = require('express');
const router = express.Router();
const dronesController  =  require('../controllers/drones.controller')

// require the Drone model here
router.get('/drones', dronesController.list);

//CREATE
router.get('/drones/create', dronesController.create);
router.post('/drones', dronesController.doCreate);

//UPDATE
router.get('/drones/:id/edit', dronesController.edit);
router.post('/drones/:id', dronesController.doEdit);

//DELETE
router.post('/drones/:id/delete', dronesController.delete);

module.exports = router;
