const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(dronesFromDB => {
      console.log(dronesFromDB);
      res.render('drones/list.hbs', {drones: dronesFromDB});
    }).catch(err => console.log(`Error finding all drones: ${err}`))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then(newDrone => {
      console.log(newDrone);
      res.redirect('/drones');
    }).catch(err => console.log(`Error creating new drone: ${err}`))
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
