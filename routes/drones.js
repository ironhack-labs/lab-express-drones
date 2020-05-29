const express = require('express');

const DroneModel = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  console.log('working')
  DroneModel.find()
    .then((drones) => {
      res.render('drones/list.hbs', { drones })
      console.log('hi')
    })
    .catch(() => {
      console.log('Error')
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body
  DroneModel.create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      res.render('drones/create-form', {showFailureMessage: true})
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drones) => {
      res.render('drones/update-form', { drones })
    })
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  DroneModel.findByIdAndUpdate(req.params.id, { $set: { name, propellers, maxSpeed } })
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      res.render('drones/update-form', {showFailureMessage: true})
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/drones')
    })
});

module.exports = router;
