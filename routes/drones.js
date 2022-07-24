const express = require('express');
const router = express.Router();
const dronesController = require ('../controllers/drones.controller')
// require the Drone model here

//drones

router.get("/drones", dronesController.list)

//create new drone
router.get('/drones/create', dronesController.create)
router.post('/drones', dronesController.doCreate)


//actualiza listado de drones
router.get('/drones/:id/edit', dronesController.edit);
router.post('/drones/:id', dronesController.doEdit);

// delete drones
router.post('/drones/:id/delete', dronesController.delete);


module.exports = router;
