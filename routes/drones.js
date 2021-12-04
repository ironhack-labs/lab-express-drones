const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(allTheDronesFromDB => {
      console.log('Retrieved drones from DB: ', allTheDronesFromDB);
      res.render('drones/list.hbs', { drones: allTheDronesFromDB });
    })
    .catch(err => {
      console.log('Error while getting drones from DB: ', err);
      next(err);
    });
});

router.get('/drones/create', (req, res, next) => res.render('drones/create-form.hbs'));

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => next(err));
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Drone.findById(id)
    .then(dronToUpdate => {
      res.render('drones/update-form.hbs', { drone: dronToUpdate});
    })
    .catch(err => next(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect(`/drones`))
    .catch(err => next(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect(`/drones`))
    .catch(err => next(err))
});

module.exports = router;
