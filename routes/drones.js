const express = require('express');
const { create } = require('../models/Drone.model');
const router = express.Router();

const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {

  Drone.find().then(data => {
    res.render('drones/list', { data });
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body)
  Drone.create({ ...req.body })
    .then(res.redirect('/drones'))
    .catch(err => console.log("Error creating drone ", err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
    .then(data => res.render('drones/update-form', data))
    .catch(err => console.log("error on the update form ", err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(res.redirect('/drones'))
    .catch(err => console.log("there has been an error updating ", err))
});

router.post('/drones/:id/delete', (req, res, next) => {

  Drone.findByIdAndDelete(req.params.id)
    .then(res.redirect('/drones'))
    .catch(err => console.log('error deleting drone from db ', err));

});

module.exports = router;
