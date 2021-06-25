const express = require("express");
const router = express.Router();

const droneController = require("../controllers/drone.controller")


/* GET home page */
router.get("/", droneController.home)

router.get('/drones', droneController.showDrones)

router.get("/drones/create", droneController.createDrone)
router.post("/drones/create", droneController.doCreateDrone)

module.exports = router;
