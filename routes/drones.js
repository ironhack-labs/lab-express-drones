const express = require('express');

const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
    Drone.find()
    .then((dronesFromDB) => 
      // console.log(allDronesFromDB))
      res.render('drones/list.hbs', { dronesFromDB }))
    .catch((err) => console.log(`There was an error retrieving all the drones: ${err}`));
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create(req.body)
  .then((currentDrone) => {
    res.redirect('/drones');
  })
  .catch((err) => console.log(`There was an error saving the Drone: ${err}`));
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
