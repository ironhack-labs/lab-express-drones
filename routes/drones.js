const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('./../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
    .find()
    .sort({ title: 1 })
    .then(drones => {
      res.render('drones/list', { drones })

    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body
  Drone
    .create({ name, propellers, maxSpeed })
    .then(drones => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

router.get('/drones/:drones_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { drones_id } = req.params
  // console.log(req.params)

  Drone
    .findById(drones_id)
    .then(drones => res.render('drones/update-form', drones))
    .catch(err => console.log(err))
});

router.post('/drones/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed, drones_id } = req.body
  console.log(req.body)
  Drone
    .findByIdAndUpdate(drones_id, { name, propellers, maxSpeed })
    .then(drones => res.redirect('/drones'))
    .catch(err => console.log(err))
});

router.post('/drones/delete/:drones_id', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { drones_id } = req.params
  console.log(drones_id)
  Drone
    .findByIdAndDelete(drones_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

module.exports = router;
