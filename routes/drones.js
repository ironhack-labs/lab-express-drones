const express = require('express');
const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
 Drone.find()
 .then((droneFromDB) => res.render("./drones/list", {droneFromDB}))
 .catch(err => console.log(`An error occurred while finding drone from the DB: ${err}`))
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
