const express = require('express');
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const createError = require('http-errors');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(next);
});


router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  console.log("creando drone")
  Drone.create(req.body)
    .then(drone => res.redirect(`/drones/`))
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('drones/create', { 
          errors: error.errors,
          drone: req.body 
        });
      } else {
        next(error);
      }
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then((drone) => {
    if (drone) {
      res.render('drones/update-form', { drone });
    } else {
      next(createError(404, 'Drone does not exists'));
    }
  }).catch(next);
});

router.post('/drones/:id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body )
    .then(drones => {
      if (drones) {
        res.redirect(`/drones/`)        
      } else {
        next(createError(404, 'Drone does not exists'));
      }
    }).catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        const drone = req.body;
        drone.id = req.params.id;
        res.render('drones/update-form', { 
          errors: error.errors,
          drone: drone
        });
      } else {
        next(error);
      }
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
    .then(drone => {
      if (drone) {
        res.redirect(`/drones/`)        
      } else {
        next(createError(404, 'Drone does not exists'));
      }
    })
    .catch(next);
});


module.exports = router;
