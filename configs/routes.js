const router = require('express').Router();
const droneController = require('../controllers/drones.controller')
const miscController = require('../controllers/misc.controller')

// HOME PAGE
router.get('/', miscController.home)

// DRONES
// Read
router.get('/drones', droneController.list);

// Create
router.get('/drones/create', droneController.create);
router.post('/drones/create', droneController.doCreate);

// Update
router.get('/drones/:id/edit', droneController.edit);
router.post('/drones/:id/edit', droneController.doEdit);

// Delete
router.post('/drones/:id/delete', droneController.delete);

module.exports = router;