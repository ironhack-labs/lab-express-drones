const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('./../models/Drone.model')

router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(allDrones => {
      res.render('drones/list', { drones: allDrones })
    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params

  Drone
    .findById(id)
    .then(allDrones => {
      res.render('drones/update-form', allDrones)
    })
    .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

module.exports = router;
