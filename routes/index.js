const express = require("express");
const router = express.Router();

const dronesController = require('../controllers/drones.controller')

/* GET home page */
router.get("/", dronesController.home);
router.get("/drones", dronesController.listDrones);

module.exports = router;
