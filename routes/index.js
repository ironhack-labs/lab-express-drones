const express = require("express");
const router = express.Router();

const dronesController = require('../controllers/drones.controller')

/* GET home page */
router.get("/", dronesController.home);
router.get("/drones", dronesController.listDrones);

router.get('/drones/create', dronesController.createDrone)
router.post('/drones/create', dronesController.doCreateDrone)

module.exports = router;
