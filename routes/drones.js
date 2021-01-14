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
    .then(drone => res.redirect('/drones'))
    .catch(error => {         
        res.render('drones/create-form')})
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
