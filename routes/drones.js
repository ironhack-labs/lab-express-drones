const express = require("express");
const router = express.Router();
const droneController = require("./../controllers/droneController");

// require the Drone model here

// Iteration #2: List the drones
router.get("/drones", droneController.getAllDrones);

// Iteration #3: Add a new drone
router.get("/drones/create", droneController.viewCreateDrone);

// Iteration #3: Add a new drone
router.post("/drones/create", droneController.createDrone);

// Iteration #4: Update the drone, view
router.get("/drones/:id/edit", droneController.viewEditDrone);

// Iteration #4: Update the drone, data
router.post("/drones/:id/edit", droneController.editDrone);

// Iteration #5: Delete the drone
router.post("/drones/:id/delete", droneController.deleteDrone);

module.exports = router;
