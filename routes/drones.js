const express = require('express');
const router = express.Router();


// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDrones) => {
      res.render('./drones/list', {
        allDrones
      })
    }).catch((err) => {
      console.log('Drone list not showing')
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('./drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body
  Drone.create({ name, propellers, maxSpeed })
    .then((response) => res.redirect('/drones'))
    .catch(() => {
      console.log('The information has not been transmitted')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  Drone.findByIdAndUpdate(id)
    .then((drones) => {
      res.render('./drones/update-form',
        drones)
    }).catch('oh no!')
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {
    id
  } = req.params
  const {

    name,
    propellers,
    maxSpeed
  } = req.body
  Drone.findByIdAndUpdate(id, {
    name,
    propellers,
    maxSpeed
  })
    .then((response) => res.redirect('/drones'))
    .catch(() => console.log('infos not transmitted'))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params
  Drone.findByIdAndDelete(id)
    .then((result) => {
      res.redirect('/drones')
    }).catch((err) => {
      console.log('something is going wrong!')
    })
});

module.exports = router;
