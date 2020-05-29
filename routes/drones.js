const express = require('express');

const DroneModel = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then( results => {
      res.render('drones/list', {results})
    })
    .catch( err => {
      res.send(err)
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  DroneModel.create({name, propellers, maxSpeed})
    .then( results=>
      res.redirect('/drones')
    )
    .catch( err =>
      res.send(err)
    )
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then( results => 
      res.render('drones/update-form', results)
      )
    .catch( err => 
      res.send(err)
      )
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {name, propellers, maxSpeed} = req.body
  DroneModel.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed})
    .then( results =>
      res.redirect('/drones')
    )
    .catch( err =>
      res.send(err)
    )
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then( results => 
      res.redirect('/drones')
    )
    .catch( err => 
      res.send(err)
    )
});

module.exports = router;
