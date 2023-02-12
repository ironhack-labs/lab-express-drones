const express = require('express');
const router = express.Router();
const Drone = require(('./../models/Drone.model'))

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(drone => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

router.get('/drones/:droneid/edit', (req, res, next) => {
  const { droneid } = req.params
  Drone
    .findById(droneid)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))

});

router.post('/drones/:droneid/edit', (req, res, next) => {
  const { name, propellers, maxSpeed, droneid } = req.body

  Drone
    .findByIdAndUpdate(droneid, { name, propellers, maxSpeed })
    .then(drone => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

router.post('/drones/:droneid/delete', (req, res, next) => {
  const { droneid } = req.params

  Drone
    .findByIdAndDelete(droneid)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
})
  ;

module.exports = router;
