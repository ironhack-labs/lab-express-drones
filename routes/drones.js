const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(AllDronesDB => {
      console.log(`List of drones from DB: ${AllDronesDB}`);
      res.render('../views/drones/list.hbs', { drones: AllDronesDB });
    })
    .catch(err => {
      console.log(`An error occurred: ${err}`);
    });
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
