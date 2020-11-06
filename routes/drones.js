const express = require('express');
const Drone = require('../models/Drone.model')

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(allDrones => {
      res.render('drones/list', {allDrones})
    })
    .catch(err => {
      next(err_)
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone.create({ name, propellers, maxSpeed})
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  console.log(id)

  Drone.findById(id)
    .then(drone => {
      console.log(drone)
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
    .then(updatedDrone => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params
  
  Drone.findByIdAndDelete(id)
    .then(response => {
      console.log(`Drone with ${id} is removed from the list`)
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
});

module.exports = router;
