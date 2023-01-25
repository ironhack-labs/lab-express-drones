const express = require("express");
const router = express.Router();
const dronesController = require("../controllers/drones.controller");

// require the Drone model here

router.get("/drones", dronesController.list);
router.get("/drones/create", dronesController.newDrone);
router.post("/drones/create", dronesController.createDrone);
router.get("/drones/:id/edit", dronesController.editDrone);
router.post("/drones/:id/edit", dronesController.editedDrone);
router.post("/drones/:id/delete", dronesController.delete)

module.exports = router;
