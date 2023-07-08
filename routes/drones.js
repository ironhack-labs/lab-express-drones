const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((drone) => {
    res.render('drones/drones-list', { drone })
  })
  .catch((err) => {
    console.log(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones', (req, res, next) => {
  Drone.create(req.body)
  .then((createdDrone) => {
    res.redirect('/drones')
    console.log(`The drone ${createdDrone.name} has been created`)
  })
  .catch((err) => {
    res.render('/drones/create')
    console.log(err)
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
