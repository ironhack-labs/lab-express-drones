const express = require('express');

const drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  drone.find({})
  .then(data => {
    res.render('drones/list', {data})
  })
  .catch(err => {
    res.json(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body)
  const { name, propellers, maxSpeed } = req.body

  drone.create({
    name,
    propellers, 
    maxSpeed
  })
  .then(data => {
    res.redirect('/drones')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/drones/create')
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
