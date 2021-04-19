const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((result) => {
    res.render('drones/list', {data: result})
  })
  .catch((err) => {
    console.log(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/drone-create')
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
  .then((result) => {
    console.log('drone created')
    res.redirect('/drones')
  })
  .catch((err) => {
    console.log(err)
  })
});

router.get('/drones/:_id/edit', (req, res, next) => {
  Drone.findById(req.params._id)
  .then((result) => {
    res.render('drones/update-form', result)
  })
  .catch((err) => {
    console.log(err)
  })
});

router.post('/drones/:_id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params._id, req.body)
  .then((result) => {
    res.redirect('/drones')
  })
  .catch((err) => {
    console.log(err)
  })
});

router.post('/drones/:_id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params._id)
  .then((result) => {
    res.redirect('/drones')
  })
  .catch((err) => {
    console.log(err)
  })
});

module.exports = router;
