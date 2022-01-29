const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((drones) => {
    res.render('drones/list', { drones })
  })
  .catch((e) => next(e));
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body);

  Drone.create(req.body)
  .then(() => {
    res.redirect('/drones');
  })
  .catch((e) => console.log(e))
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id) 
  .then((drone) => {
    res.render('drones/update-form', drone)
  })
  .catch((e) => console.log(e))
});

router.post('/drones/:id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect('/drones')
  })
  .catch((e) => console.log(e))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
