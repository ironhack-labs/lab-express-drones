const express = require('express');

// require the Drone model here
const Drone = require('../models/drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones });
    })
    .catch((err) => next(err));
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
    .then((newDrone) => {
      res.redirect('/drones');
    })
    .catch((err) => {
      res.redirect('/drones/create');
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render('drones/update-form', drone);
    })
    .catch((err) => next(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  console.log(req.body)
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/drones'))
    .catch((err) => next(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findOneAndDelete(req.params.id).then(()=>res.redirect('/drones')).catch(err=>next(err))
});

module.exports = router;
