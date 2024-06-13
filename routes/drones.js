const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const dronesList = await Drone.find();
    res.render("drones/list", { dronesList });
  } catch (err) {
    console.log(err);
  }
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  await Drone.create(req.body);
  res.redirect("/drones");
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  const existingDrone = await Drone.findById(req.params.id);
  res.render("drones/update-form", existingDrone);
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  await Drone.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/drones");
});

router.post("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  await Drone.findByIdAndDelete(req.params.id);
  res.redirect("/drones");
});

module.exports = router;
