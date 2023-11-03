const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model');
const DroneModel = require('./../models/Drone.model');

router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(drone => {
      res.render('drones/list', { drone })
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(() => res.render('drones/create-form'))
})

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(error => console.log(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params
  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(() => res.redirect(`/drones/${id}/edit`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params
  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => console.log(error))
});

module.exports = router;
