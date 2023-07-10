// const express = require('express');
// const router = express.Router();

const router = require("express").Router();
const dronesController = require("../controllers/drones.controller.js");

// require the Drone model here
const Drone = require("../models/Drone.model");

// Iteration #2: List the drones
router.get("/drones", dronesController.listDrones);

// Iteration #3: Add a new drone - GET
router.get("/drones/create", dronesController.getCreateForm);

// Iteration #3: Add a new drone - POST
router.post("/drones", dronesController.createDrone);

// Iteration #4: Update the drone - GET
router.get("/drones/:id/edit", dronesController.getEditForm);

// Iteration #4: Update the drone - POST
router.post("/drones/:id", dronesController.editDrone);

// Iteration #5: Delete the drone
router.post("/drones/:id/delete", dronesController.deleteDrone);

module.exports = router;
