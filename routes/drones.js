const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();
// require the Drone model here
const droneController = require("./../controllers/dronesController")


// Iteration #2: List the drones
router.get('/drones', droneController.getAllDrones);

// Iteration #3: Add a new drone
// get the form page to create a drone
router.get('/drones/create', droneController.viewCreateDrone);
// Affter create a drone, redirect to drones page
router.post('/drones/create', droneController.createDrone);


// Iteration #4: Update the drone
router.get('/drones/:droneID/edit', droneController.viewEditDrone);
router.post('/drones/:droneID/edit', droneController.editDrone);

// Iteration #5: Delete the drone
router.post('/drones/:droneID/delete', droneController.deleteDrone);

module.exports = router;
