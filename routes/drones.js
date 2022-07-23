const express = require("express");
const router = express.Router();
const dronesController = require("../controllers/drones.controller");

// require the Drone model here
//list all drones
router.get("/drones", dronesController.drones);

//create new
router.get("/drones/create", dronesController.createDrone);
router.post("/drones/create", dronesController.doCreate);

//edit
router.get("/drones/:id/edit", dronesController.editDrone);
router.post("/drones/:id/edit", dronesController.doEdit);

//delete
router.post("/drones/:id/delete", dronesController.delete);

module.exports = router;
