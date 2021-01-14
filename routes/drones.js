const express = require('express');
const { find } = require('../models/drone.model');
const Drone = require('../models/drone.model')


const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then(FromDB => {
      res.render('drones/list', { drones :FromDB });
    })
    .catch((error) => {
      console.log(error)}
    );
});

router.get('/drones/create', (req, res, next) => {
   Drone.create()
    .then( )
  // ... your code heren

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
