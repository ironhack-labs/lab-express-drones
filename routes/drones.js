const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(drones => res.render('drones/list.hbs', { drones }))
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create(req.body)
    .then(newDrone => res.redirect('/drones'))
    .catch(err => console.log(err))


});

router.get('/drones/:id/edit', (req, res, next) => {

  Drone
    .findById(req.params.id)
    .then(drone => {
      res.render('drones/update-form', drone)
      console.log(drone)
    })
    .catch(err => console.log(err))



});

router.post('/drones/:id/edit', (req, res, next) => {

  Drone
    .findByIdAndUpdate(req.params.id, req.body)
    .then(drone => res.redirect('/drones'))
    .catch(err => console.log(err))

});

router.post('/drones/:id/delete', (req, res, next) => {

  Drone
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))



});

module.exports = router;
