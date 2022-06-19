const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => {
      next(err);
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then(drone => {
      console.log("A Drone has been created", drone)
      res.render('drones/success', {isCreated: true})
    })
    .catch(err => {
      res.render('/drones/create-form');
      next()
    })
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  console.log("que es el req.params", req.params)
  Drone.findById(id)
    .then(drone => {
      
      res.render('drones/update-form', drone )
    })
    .catch(err => {
      console.log("Error finding drone", err);
      next(err);
    })
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findByIdAndUpdate(id, req.body)
    .then(drone => {
      res.render('drones/success', {isUpdated: true})
    })
    .catch(err => {
      console.log("Error updating drone", err);
      next(err);
    })
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
