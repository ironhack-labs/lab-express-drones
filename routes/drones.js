const express = require('express');

// require the Drone model here
const Drones = require('../models/Drone.model')
const router = express.Router();

router.get('/drones', async(req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  const drones = await Drones.find()
  console.log("Drones:", drones)
  res.render("drones", {drones})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
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
