const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')


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
    .catch(err => res.render('drones/create'))
});



router.get('/drones/:drone_id/edit', (req, res, next) => {

  const { drone_id } = req.params

  Drone
    .findById(drone_id)
    .then(drone => res.render("drones/update-form", drone))
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/edit', (req, res, next) => {

  const { drone_id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(drone => res.redirect(`/drones`))
    .catch(err => res.render('/drones/:drone_id/edit'))
});



router.post('/drones/:drone_id/delete', (req, res, next) => {

  const { drone_id } = req.params

  Drone
    .findByIdAndDelete(drone_id)
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});


module.exports = router;
