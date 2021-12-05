const express = require('express');
const router = express.Router();

// require the Drone model
const Drone = require('../models/drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(drones => {
      console.log('Drones', drones);
      res.render('drones/list.hbs', { drones });
  })
  .catch(err => {
      console.log('Error',err);
      res.send("Error al listar los drones");
  })

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  
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
