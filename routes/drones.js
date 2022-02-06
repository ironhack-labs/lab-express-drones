const express = require('express');
const { route } = require(".")
const router = express.Router();
const droneController = require("./../controllers/droneController")

// require the Drone model here
//Iteracion 2
router.get("/drones", droneController.getDrones)
// Iteration #3: Add a new drone
router.get("/drones/create", droneController.createDrones)
// Iteration #3: Add a new drone
router.post("/drones/create", droneController.createDronesForm)
// Iteration #4: Update the drone
router.get("/drones/:id/edit", droneController.updateDrones)
// Iteration #4: Update the drone
router.post("/drones/:id/edit", droneController.updateDronesForm)
// Iteration #5: Delete the drone
router.post("/drones/:id/delete", droneController.deleteDrone)
module.exports = router



