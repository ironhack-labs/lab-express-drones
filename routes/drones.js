const express = require("express");
const router = express.Router();
const DronesController = require("../controllers/drones.controller");

// require the Drone model here

router.get("/drones", DronesController.listDrones);

router.get("/drones/create", DronesController.showFormToAdd);

router.post("/drones/create", DronesController.addDrone);

router.get("/drones/:id/edit", DronesController.showFormToEdit);

router.post("/drones/:id/edit", DronesController.updateDrone);

router.post("/drones/:id/delete", DronesController.deleteDrone);

module.exports = router;
