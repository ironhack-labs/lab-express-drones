const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model');

// Iteration #2: List the drones
router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((dronesFromDroneSeed) => {
      res.render('drones/list', { dronesFromDroneSeed });
    })
    .catch((err) => next(err));
});

router.get('/drones/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.create({ name, propellers, maxSpeed })
    .then((newDrone) => {
      console.log(newDrone)
      res.redirect('/drones')
    })
    .catch((err) => next(err));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((updateDrone) => {
      res.render('drones/update-form', updateDrone)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then((updateDrone) => {
      console.log(updateDrone)
      res.redirect('/drones')
    })
    .catch((err) => next(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then((deleteDrone) => {
      console.log(deleteDrone)
      res.redirect('/drones');
    })
    // Utilizamos el next(err) para controlar el error
    .catch((err) => next(err));
});

module.exports = router;
