const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();

const Dron = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  Dron
  .find()
  .then(drones => res.render('drones/list',{drones}))
  .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  Dron
  .create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(err => console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
