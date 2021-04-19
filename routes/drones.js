const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
  .then((result)=>{
    res.render('drones/list', {drone: result})
  })
  .catch((error)=>{
  console.log(error)
  })
  
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body)
  Drone.create(req.body)
  .then((result)=>{
    console.log(req.body)
    res.redirect(`/drones`)
  })
  .catch((error)=>{
  console.log(error)
  })
  
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
