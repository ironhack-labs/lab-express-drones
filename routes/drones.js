const express = require('express');
const { find } = require('../models/drone.model');
const Drone = require('../models/drone.model')


const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then(dronesFromDB => {
      res.render('drones/list', { drones : dronesFromDB });
    })
    .catch((error) => {
      console.log(error)}
    );
});

router.get('/drones/create', (req, res, next) => {
   res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
    .then(drone => res.redirect(`/drones`))
    .catch(error => {         
        res.render('drones/create-form')})
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
    Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(drone => {
      if (drone) {
        res.redirect('/drones');
      } else {
        next(createError(404, 'Drone does not exists'));
      }
    }).catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('drones/update-form', { 
          errors:error.errors, 
          drone: req.body
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
        res.redirect('/drones');
      } else {
        next(createError(404, 'Drone does not exists'));
      }
    })
    .catch(next);
});

module.exports = router;
