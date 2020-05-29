const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model')


router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      console.log(drones)
      res.render('../views/drones/list.hbs', {drones})
    })
    .catch(() => {
      console.log('Drones did not display. Something went wrong.')
    })
});

router.get('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;

  DroneModel.create({name, propellers, maxSpeed})
    .then((response) => {
      res.render('views/drones/create-form.hbs', {showSuccessMessage: true})
    })
    .catch(() => {
      res.render('views/drones/create-form.hbs', {showFailureMessage: true})
    })
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
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
