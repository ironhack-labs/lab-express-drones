const express = require('express');

const Drone = require('../models/Drone.model'); // require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((drones => res.render('drones/list', {drones: drones})))
  .catch(error => console.log('Error listing drones:', error))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = req.body
  Drone
    .create(newDrone)
    .then((drone) => {
      console.log(`${drone.name} created`)
      res.redirect('/drones')})
    .catch(error => console.log('Error adding drone:', error))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone
      .findById(req.params.id)
      .then(drone => {
        res.render('drones/update-form', { drone })
      })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const updatedDrone = req.body
  console.log(updatedDrone)
  Drone
      .findByIdAndUpdate(req.params.id, updatedDrone, { new: true })
      .then(drone => {
        console.log(`${drone.name} updated`)
        res.redirect('/drones')
      })
      .catch(error => console.log('Error updating drone:', error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log(`Drone ${req.params.id} deleted`)
      res.redirect('/drones')
    })
    .catch(error => console.log('Error deleting drone:', error))
});

module.exports = router;
