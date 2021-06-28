const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', async (req, res) => {
  // Iteration #2: List the drones
  const drones = await Drone.find();
  res.render("drones/list", { drones });
});

router.get('/drones/create', async (req, res) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;

  await Drone.create({
    name,
    propellers,
    maxSpeed
  });

  res.redirect("/drones");
});

router.get('/drones/:id/edit', async (req, res,) => {
  // Iteration #4: Update the drone
  const editDrone = await Drone.findByIdAndUpdate(req.params.id);
  res.render("drones/update-form", editDrone);
});

router.post('/drones/:id/edit', async (req, res) => {
  // Iteration #4: Update the drone
  const {name, propellers, maxSpeed} = req.body;
  await Drone.findByIdAndUpdate(req.params.id, {
    name,
    propellers,
    maxSpeed
  });
  res.redirect("/drones");
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  await Drone.findByIdAndDelete(req.params.id);
  res.redirect("/drones");
});

module.exports = router;
