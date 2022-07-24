const router = require('express').Router();
const droneController = require('../controllers/drones.controller');

router.get('/', droneController.home);

router.get('/drones/new', droneController.create); // Renderiza la pagina de crear
router.post('/drones', droneController.doCreate); // Envia el form a DB

router.get('/drones', droneController.list);
router.get('/drones/:id', droneController.details);

router.get('/drones/:id/edit', droneController.edit);
router.post('/drones/:id', droneController.doEdit);

router.post('/drones/:id/delete', droneController.delete);

module.exports = router;
