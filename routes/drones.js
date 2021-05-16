const express = require('express');
const {
  create
} = require('../models/Drone.model');
const Drone = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

// Iteration #2: List the drones
router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(dronesFromDB => res.render('drones/list', {
      dronesFromDB
    }))
    .catch(error => console.log('Error while getting the drones from the DB: ', error));
});

// Iteration #3: Add a new drone
router.get('/drones/create', (req, res, next) => res.render('drones/create-form'));

// Iteration #3: Add a new drone
router.post('/drones/create', (req, res, next) => {
  const {
    name,
    propellers,
    maxSpeed
  } = req.body

  Drone.create({
      name,
      propellers,
      maxSpeed
    })
    .then(() => res.redirect('/drones'))
    .catch(error => {
      next(error)
    })
});

// Iteration #4: Update the drone
router.get('/drones/:id/edit', (req, res, next) => {
  const {
    id
  } = req.params

  Drone.findById(id)
    .then(droneToEdit => {
      res.render('drones/update-form', {
        drone: droneToEdit
      })
    })
    .catch(error => next(error))
});

// Iteration #4: Update the drone
router.post('/drones/:id/edit', (req, res, next) => {
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
    }, {
      new: true
    })
    .then(updateDrone => res.redirect('/drones'))
    .catch(error => next(error))
});

// Iteration #5: Delete the drone
router.post('/drones/:id/delete', (req, res, next) => {
  const {
    id
  } = req.params

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error))
});

module.exports = router;