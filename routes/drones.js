const express = require('express');
const DroneModel = require('../models/Drone.models');

//

const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find()
  .then((dbRes) => {
    console.log(dbRes);
    res.render('drones/list.hbs', {drones : dbRes})
  })
  .catch((err) => console.log(err));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
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
