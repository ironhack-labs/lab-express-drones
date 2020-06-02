const express = require("express");

// require the Drone model here
const DroneModel = require("../models/drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find("../models/drone.model.js");
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("../drones/drone-create.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("../drones/create-form.hbs");
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
