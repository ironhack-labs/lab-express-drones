const express = require('express');
const { populate } = require('./../models/Drone.model');
const router = express.Router();

// require the Drone model here
const Dron = require('./../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // res.send('probando')
  Dron
    .find()
    .sort({ name: 1 })
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => console.log(err))
})

router.get('/drones/create', (req, res, next) => {
  // res.send('probando url')
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  Dron
    .create({ name, propellers, maxSpeed })
    .then(dron => res.redirect('/drones'))
    .catch(err => res.redirect('/drones/create'))
});

router.get('/drones/:dron_id/edit', (req, res, next) => {

  const { dron_id } = req.params
  console.log(dron_id)

  Dron
    .findById(dron_id)
    .then(dron => res.render('drones/update-form', dron))
    .catch(err => console.log('error de edicion', (err)))
});

router.post('/drones/:dron_id/edit', (req, res, next) => {

  const { name, propellers, maxSpeed, dron_id } = req.body
  console.log({ name, propellers, maxSpeed, dron_id })

  Dron
    .findByIdAndUpdate(dron_id, { name, propellers, maxSpeed })
    .then(dron => res.redirect('/drones'))
    .catch(err => console.log(err))
});

router.post('/drones/:dron_id/delete', (req, res, next) => {

  const { dron_id } = req.params

  Dron
    .findByIdAndDelete(dron_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('popino', err))

});

module.exports = router;
