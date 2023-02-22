const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/', async (req, res, next) => {
  // Iteration #1: List the drones
  try {
    const allTheDrones = await Drone.find({});
    res.render("drones/index", {
      data: allTheDrones,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allTheDrones = await Drone.find({});
    res.render("drones/list", {
      data: allTheDrones,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render("drones/create-form")
  } catch (error) {
    console.log(error);
  }
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  try {
    const newDrone = await Drone.create({ name, propellers, maxSpeed });
    return res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneID } = req.params;
  try { 
    const droneFound = await Drone.findById(droneID);
    res.render("drones/update-form", { drone: droneFound });
  } catch (error) {
    console.log(error);
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneID } = req.params;
  const { name, propellers, maxSpeed } = req.body;
    try {
      const updatedDrone = await Drone.findByIdAndUpdate(droneID, { name, propellers, maxSpeed }, { new: true });
      return res.redirect("/drones");
    } catch (error) {
      console.log(error);
    }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const { droneID } = req.params;
    try {
      await Drone.findByIdAndDelete(droneID);
      return res.redirect("/drones");
    } catch (error) {
      console.log(error);
    }
});

module.exports = router;
