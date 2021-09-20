const express = require("express");
const router = express.Router();

// require the Drone model here

//*/*/*/*/*/*/*/

const droneController = require("../controllers/droneController");

router.get("/drones", droneController.drones);

router.get("/drones/create", droneController.getDrone);

router.post("/drones/create", droneController.postDrone);

router.get("/drones/:id/edit", droneController.getEditDrone);

router.post("/drones/:id/edit", droneController.postEditDrone);

router.post("/drones/:id/delete", droneController.deleteOne);

module.exports = router;
