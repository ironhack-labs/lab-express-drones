const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get('/drones', async (req, res) => {
  // Iteration #2: List the drones
  const dronesList = await Drone.find();
  res.render("drones/list", { dronesList });
});

router.get('/drones/create', (req, res) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', async (req, res) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  try {
      await Drone.create ({
    name,
    propellers,
    maxSpeed,
  });
  } catch (e){
    res.redirect("/drones/create");
  }
res.redirect('/drones');
});

router.get('/drones/:id/edit', async (req, res) => {
  // Iteration #4: Update the drone
  const droneDetail = await Drone.findById(req.params.id);
  res.render("drones/update-form", droneDetail);
});

router.post('/drones/:id/edit', async (req, res) => {
  // Iteration #4: Update the drone
      const {name, propellers, maxSpeed} = req.body;
  try {
    await Drone.findByIdAndUpdate(req.params.id, {
    name,
    propellers, 
    maxSpeed,
    });
  } catch (e) {
    res.redirect('/drones/:id/edit');
  }
    res.redirect("/drones");
});

router.post('/drones/:id/delete', async (req, res) => {
  // Iteration #5: Delete the drone
  await Drone.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
});


module.exports = router;
