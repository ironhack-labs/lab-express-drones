const express = require("express");
const router = express.Router();

const droneController = require("../controllers/drone.controller")


/* GET home page */
router.get("/", droneController.home)

router.get('/drones', droneController.showDrones)

module.exports = router;
