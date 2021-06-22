const express = require("express");
const router = express.Router();
const dronesController = require("../controllers/drones.controllers")

/* GET home page */
// router.get("/", (req, res, next) => res.render("index"));

router.get('/', dronesController.index);
router.get('/drones', dronesController.listDrones);

router.get('/drones/create', dronesController.createDrone);
router.post('/drones/create', dronesController.doCreateDrone);

module.exports = router;
