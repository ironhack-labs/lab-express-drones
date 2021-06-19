const express = require("express");
const router = express.Router();

const dronesController = require('../controllers/drones.controller')

/* GET home page */
router.get("/", dronesController.home);
router.get("/drones", dronesController.listDrones);

router.get('/drones/create', dronesController.createDrone)
router.post('/drones/create', dronesController.doCreateDrone)

router.get('/drones/:id/edit', dronesController.editDrone)
router.post('/drones/:id/edit', dronesController.doEditDrone)

router.get('/drones/:id', dronesController.id)

module.exports = router;
