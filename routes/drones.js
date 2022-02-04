const express = require("express");
const { route } = require(".")
const router = express.Router();
const droneController	= require("../controllers/droneController")

// require the Drone model here

  router.get("/", droneController.getDrones)

  router.get("/create", droneController.createDrones)

  router.post("/create", droneController.createDronesForm)

  router.get("/:droneID", droneController.getSingleDrone)  

  router.get("/:droneID/edit", droneController.editDrone)
  
  router.post("/:droneID/edit", droneController.editDroneForm)

  router.post("/:droneID/delete", droneController.deleteDrone)

module.exports = router;
