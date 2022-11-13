const express = require('express');
const router = express.Router();

const DroneModel = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  DroneModel
    .find()
    .then((drones) => {
      res.render('drones/list', { drones })
    })
    .catch((err) => next(err));
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  DroneModel
    .create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => next(err));
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;

  DroneModel
    .findById(id)
    .then((drone) => {
      res.render('drones/update-form', drone);
    })
    .catch((err) => next(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  DroneModel
    .findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => next(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
  DroneModel
    .findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => next(err));
});

module.exports = router;
