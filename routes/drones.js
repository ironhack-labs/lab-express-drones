const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model.js')


router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(dronesData => {

      res.render('drones/list', { dronesData })
    })

  // console.log('no Arriesgo')
  // res.send('no Arriesgo')


});

router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form')

});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body
  console.log('aqui estoy')

  Drone
    .create({ name, propellers, maxSpeed })
    .then(droneCreated => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))

});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  Drone
    .findById(id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))



});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(drone => res.redirect('/drones'))
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
