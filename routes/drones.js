const express = require('express');

// require the Drone model here

const Drone = require('../models/drone.model');


const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find().then((dronesFromDB) => {
    res.render('drones/create-form')
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  const {
    name,
    propellers,
    maxSpeed
  } = req.body

  Drone.create({
      name,
      propellers,
      maxSpeed
    })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err));

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id).then((drone) => {
    res.redirect('drones/update-form', drone)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    propellers,
    maxSpeed: req.body.maxSpeed
  }).then(() => {
    res.redirect('/drones')
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/drones')
  })
});

module.exports = router;