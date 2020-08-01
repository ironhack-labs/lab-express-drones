const express = require('express');

// require the Drone model here
const dronesModel = require('../models/Drone.models')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  dronesModel.find()
    .then((drones) => res.render('drones/list.hbs', {drones}))
    .catch((err) => console.log('Some error:', err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  dronesModel.create(req.body)
    .then(() => res.redirect('/drones'))
    .catch(() => res.render('drones/create'))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  dronesModel.findById(req.params.id)
    .then((drone) => res.render('drones/update-form', {drone})) 
    .catch((err) => console.log('Some error:', err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  dronesModel.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(() => res.redirect('/drones'))
    .catch(() => res.render('drones/:id/edit'))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  dronesModel.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/drones'))
    .catch((err) => console.log('Some error:', err))
});

module.exports = router;
