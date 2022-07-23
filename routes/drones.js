const express = require('express');
const { listIndexes } = require('../models/Drone.model.js');
const router = express.Router();

const Drone = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(next)
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const data = {}

  Drone.create(req.body)
    .then(createdDrone => {
      console.log(createdDrone)

      res.redirect('/drones')
    })
    .catch(next)
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  Drone.findById(id)
    .then(drone => {
      res.render('drones/update-form', { drone })
    })
    .catch(err => {
      console.error('No bueno')
      res.redirect('/drones')
    })
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  Drone.findByIdAndUpdate(id, req.body, { new: true })
    .then(drone => {
      console.log({drone})

      res.redirect(`/drones`)
    })
    .catch(err => {
      console.error('No Bueno')
      res.redirect('/drones')
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params

  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(next)
});

module.exports = router;
