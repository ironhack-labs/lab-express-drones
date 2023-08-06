const express = require('express');
const Dron = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {

  Dron
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body


  Dron
    .create({ name, propellers, maxSpeed })
    .then(dron => res.redirect('/drones'))
    .catch(err => console.log(err))
});

router.get('/drones/:dron_id/edit', (req, res, next) => {
  const { dron_id } = req.params

  Dron
    .findById(dron_id)
    .then(drones => res.render('drones/update-form', drones))
    .catch(err => console.log(err))

});

router.post('/drones/:dron_id/edit', (req, res, next) => {

  const { dron_id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Dron
    .findByIdAndUpdate(dron_id, { name, propellers, maxSpeed })
    .then(drones => res.redirect('/drones'))
    .catch(err => console.log(err))


});

router.post('/drones/:dron_id/delete', (req, res, next) => {
  const { dron_id } = req.params

  Dron
    .findByIdAndDelete(dron_id)
    .then(drones => res.redirect('/drones'))
    .catch(err => console.log(err))

});

module.exports = router;
