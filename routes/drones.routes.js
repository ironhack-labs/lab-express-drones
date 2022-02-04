const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')


// ------------ ROUTES

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones

  Drone
    .find()
    .then(drone => {
      console.log(`These are the drones`, drone)
      res.render('drones/list', { drone })
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
    .then(() => res.redirect('/drones'))
    .catch(err => {
      console.log('ERROR AL CREAR NUEVO DRONE', err)
      res.render('drones/create-form')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  console.log('El ID ahora es', id)

  Drone
    .findById(id)
    .then(drone => {
      console.log('El dronsito es -----', drone)
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(res.redirect('/drones'))
    .catch(err => {
      console.log('ERROR AL ACTUALIZAR NUEVO DRONE', err)
      res.render('drones/update-form')
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

module.exports = router;
