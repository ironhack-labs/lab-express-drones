const express = require('express');

// require the Drone model here

const router = express.Router();

let DroneModel = require('../models/drone.model')

router.get('/drones/', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
         res.render('drones/list.hbs', {drones})
    })
    .catch(() => {
         res.send('Something went wrong')
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
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
