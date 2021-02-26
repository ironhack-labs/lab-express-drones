const express = require('express');

const droneModel = require("./../models/Drone.model")

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  droneModel.find()
  .then((dbRes) => {
    res.render("list", {drones: dbRes})
  }).catch((err) => {
    next(err);
  })
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
