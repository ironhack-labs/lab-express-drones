const express = require('express');

// require the Drone model here
const drone = require('../models/Drone.model')

const router = express.Router();

//const { get } = require("mongoose");

router.get('/drones', (req, res, next) => {
  drone.find({})
  .then(data => {
   // res.json(data)
    res.render('drones/list', {data})
    console.log(data)
  })
  .catch(err => {
    res.json(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log('test')
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
