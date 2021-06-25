const express = require("express");
const router = express.Router();
const dronesController = require("../controllers/drones.controllers")

/* GET home page */
// router.get("/", (req, res, next) => res.render("index"));

router.get('/', dronesController.index);
router.get('/drones', dronesController.listDrones);

router.get('/drones/:id', dronesController.DroneId);


router.get('/drones/create', dronesController.createDrone);
router.post('/drones/create', dronesController.doCreateDrone);

router.get('/drones/:id/edit', dronesController.updateDrone);
router.post('/drones/:id/edit', dronesController.doUpdateDrone);

router.post('/drones/:id/delete', dronesController.deleteDrone)

module.exports = router;
