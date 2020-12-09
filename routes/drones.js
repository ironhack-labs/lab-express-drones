const express = require('express');
const Drone = require("../models/Drone.model");
// require the Drone model here

const router = express.Router();

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const drones = await Drone.find();
    console.log(drones)
    res.render("drones/list.hbs", { drones });
  } catch (err) {
    res.send(err);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/drone-create.hbs')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    try {
      await Drone.create(req.body);
      const newDrone = await Drone.find();
      res.render("drones/create-form.hbs", { newDrone });
    } catch (err) {
      console.log(err);
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
