const express = require('express');

const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (_, res) => {
  Drone.find().then(dronesFromDB => {
    res.render('drones/list', {drones: dronesFromDB}) // add data here
  }).catch(err => console.error(err))
});
  

router.get('/drones/create', (_, res) => res.render('drones/create-form'));

router.post('/drones/create', (req, res) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(err => console.error(err))
});

router.get('/drones/:id/edit', (req, res) => {
  const {id} = req.params
  Drone.findById(id)
  .then(drone => res.render('drones/update-form', drone))
  .catch(err => console.error(err))
});

router.post('/drones/:id/edit', (req, res) => {

  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(id, {name: name, propellers: propellers, maxSpeed: maxSpeed})
  .then(res.redirect('/drones'))
  .catch(err => console.error(err))
});

router.post('/drones/:id/delete', (req, res) => {

  const {id} = req.params

  Drone.findByIdAndDelete(id).then(res.redirect('/drones')).catch(err => console.log(err));
});

module.exports = router;
