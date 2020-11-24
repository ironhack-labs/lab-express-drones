const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => {
      res.render('drones/list', {
        dronesFromDB
      });
    })
    .catch((error) => console.log(`Could not list the drones due to an error: ${error}`));
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
  .then((droneFromDB) => res.redirect('/drones'))
  .catch((error) => res.redirect('/drones/create'));

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