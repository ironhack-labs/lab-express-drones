const express = require("express");

const {
  getDrones,
  getDrone,
  createDrone,
  updateDrone,
  deleteDrone,
} = require("../controllers/drone.controller");

// require the Drone model here

const router = express.Router();

router.get("/drones", getDrones);

router.get("/drones/create", (req, res, next) =>
  res.render("drones/create-form")
);

router.get("/drones/:DroneId", getDrone);

router.post("/drones/create", createDrone);

router.post("/drones/:DroneId/update", updateDrone);

router.post("/drones/:DroneId/delete", deleteDrone);

module.exports = router;
