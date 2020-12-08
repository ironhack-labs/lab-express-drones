const express = require('express');
const Drones = require("../models/Drone.model");

// require the Drone model here

const router = express.Router();

router.get('/drones',async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drones.find();
    res.render("drones/list", { drones });
  } catch (error) {
    next(error);
  }
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const drones = await Drones.find();
    res.render("drones/drone-create", drones);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/drones/create', async(req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const droneNew = await Drones.create(req.body);
    console.log("mirame", droneNew)
    const otherDrone = await Drones.find();
    res.render("/drones", otherDrone);
  } catch (error) {
    console.log(error);
    
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});


module.exports = router;
