// require the Drone model here
const express = require('express');
const router = express.Router();
const  droneController = require("./../controllers/droneController")


  // Iteration #2: List the drones
router.get("/", droneController.getAllDrones)

  // Iteration #3: Add a new drone
router.get('/create', droneController.viewCreateDrone)

  // Iteration #3: Add a new drone
router.post('/create', droneController.createDrone)

  //vista de un drone específico
router.get("/:droneID", droneController.getDrone)

  // Iteration #4: Update the drone
router.get("/:droneID/edit", droneController.viewEditDrone)

  // Iteration #4: Update the drone
router.post("/:droneID/edit", droneController.editDrone)

  // Iteration #5: Delete the drone
router.post("/:droneID/delete", droneController.deleteDrone)

module.exports = router;
