const { response } = require('express');
const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((allDrones) => {
      res.render('drones/list', { drones: allDrones });
    })
    .catch((err) => {
      console.log('boom! Fuck! Error!');
    });
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, maxSpeed, propellers }).then(res.redirect('/drones'));
});

router.get('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Drone.findById(id).then((singleDrone) => {
    res.render('drones/update-form', singleDrone);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const { name, maxSpeed, propellers } = req.body;
  Drone.findByIdAndUpdate(
    id,
    { name, maxSpeed, propellers },
    { new: true }
  ).then(res.redirect('/drones'));
});

router.post('/drones/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Drone.findByIdAndDelete(id).then(() => res.redirect('/drones'));
});

module.exports = router;
