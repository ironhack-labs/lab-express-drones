const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(drones => {
    res.render('drones/list', { drones: drones })
  })
  .catch(error => console.log('There was an error while retrieving the drones from the DB', error))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body

  Drone.create(req.body)
    .then(() => res.redirect('/drones'))
    .catch(error => res.send('Error while creating a new Drone', error))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then(droneToEdit => {
      res.render('drones/update-form', {drone: droneToEdit})
    })
    .catch(error => console.log('Error while retrieving Drone to edit:', error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/drones'))
    .catch(error => console.log('Error while updating drone', error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/drones'))
});

module.exports = router;
