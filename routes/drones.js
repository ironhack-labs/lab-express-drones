const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js'); // <== add this line before your routes

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(allDronesFromDB => {
    console.log(allDronesFromDB);

    res.render('drones/list.hbs', {drones: allDronesFromDB});
  })
  .catch(error => {
    console.log('Error while getting the drones from the DB: ', error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;

  Drone.create({name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch(error => {
      console.log('Error creating a new drone', error)
      next();
    })
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
