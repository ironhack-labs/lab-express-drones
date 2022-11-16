const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(data => {
    console.log(data)
    res.render('drones/list', {data})
  })
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body)
  const { name, propellers, maxSpeed } = req.body
  Drone.create({name, propellers, maxSpeed})
  res.redirect('/drones')
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  console.log(req.params.id)
  Drone.findById(req.params.id)
  .then(drone =>{
    res.render('drones/update-form', {drone})
  })
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed}, { new : true })
  .then (drone=>{
    console.log(drone)
    res.redirect('/drones')
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
  .then(data=> res.redirect('/drones'))
});

module.exports = router;
