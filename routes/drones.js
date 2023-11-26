const express = require('express');
const router = express.Router();

// require the Drone model here
const Dron = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Dron.find()
    .then((dronesFind) => {
      res.render('drones/list', { dronesFind });
    })
    .catch((err) => console.log(err));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    const { name, propellers, maxSpeed } = req.body;
    Dron.create({ name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch((err) => console.log(err));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  Dron.findById(id)
  .then((dronID) => {
    res.render('drones/update-form', dronID)
  })
  .catch((err) => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  const { id } = req.params;
  Dron.findByIdAndUpdate(id,{ name, propellers, maxSpeed})
  .then((dronUpdate) => {
    res.redirect('/drones', dronUpdate)
  })
  .catch((err) => console.log(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  Dron.findByIdAndDelete(id)
  .then((dronDelete) => {
    res.redirect('/drones', dronDelete)
  })
  .catch((err) => console.log(err))
});

module.exports = router;
