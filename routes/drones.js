const express = require('express');
const Drone = require("../models/Drone.model.js");

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then((drones) => {
      res.render("drones/list", { drones });
    })
    .catch((error) => next(error));
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones');
    })
    .catch(error => res.render('drones/create-form', { error }));
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => res.render('drones/update-form', { error }));
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
