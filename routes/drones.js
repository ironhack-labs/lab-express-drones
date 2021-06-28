const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/', (req, res, next) => {
  Drone.find()
  .then(allDrones => res.render('./drones/list', {allDrones}))
  .catch (err => console.log(err))
});


router.get('/create', (req, res, next) => {
  res.render('./drones/create-form')
});

router.post('/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
  .then (newDrone => {
    console.log(newDrone)
    res.redirect('/drones')
  })
  .catch (err => {
    console.log(err)
    res.redirect('/drones/create')
  })

});


router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
