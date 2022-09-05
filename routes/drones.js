const express = require('express');
const { findById } = require('../models/Drone.model');
const router = express.Router();

const DroneModel = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      const infoDron = drones.map((drone) => {
        return {
          name: drone.name,
          propellers: drone.propellers, // array
          maxSpeed: drone.maxSpeed,
          id: drone.id
        }
      })
      console.log(infoDron)
      res.render("drones/list", { infoDron })
    })
    .catch((err) => next(err));
});

router.get('/drones/create-form', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create-form', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.create({ name, propellers, maxSpeed })
    .then((newDron) => {
      console.log(newDron)
      res.redirect('/drones/create-form') //redirigir a otra página que diga que todo ha ido bien
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  DroneModel.findById(req.params.id)
    .then((updateDrone) => {
      console.log(updateDrone)
      res.render('drones/update-form', updateDrone)
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then((updateDron) => {
      console.log(updateDron)
      res.redirect('/drones')
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
    .then((removeDron) => {
      console.log(removeDron)
      res.redirect('/drones')
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
