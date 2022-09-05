const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .select('name propellers maxSpeed')
    .then((drones) => {
      res.render('drones/list', { drones })
    }).catch((err) => {
      next(err)
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
    .then((newDrone) => {
      console.log("New Drone created")
      res.redirect('/drones')
    })
    .catch((err) => {
      next(err)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drone) => {
      res.render('drones/update-form', drone)
    })
    .catch((err) => next(err))

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  DroneModel.updateOne({ _id: req.params.id }, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones')
    })
    .catch((err) => next(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('/drones')
    })
    .cathc((err) => next(err))
});

module.exports = router;
