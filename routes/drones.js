const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((drone) => {
    res.render('drones/list', {drone})
  }).catch((err) => {
    console.log('failed to display drones')
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
  .then((result) => {
    res.redirect('/drones')
  }).catch((err) => {
    res.render('/drones/create')
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  Drone.findById(id)
  .then((drone) => {
    res.render('drones/update-form', {drone})
  }).catch((err) => {
    
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(req.params.id, {
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed
  })
  .then((result) => {
    res.redirect('/drones')
  }).catch((err) => {
    res.render('/drones/{{id}}/edit')
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  Drone.findByIdAndRemove(id)
  .then((result) => {
    res.redirect('/drones')
  }).catch((err) => {
    res.redirect('/drones')
  });
});

module.exports = router;
