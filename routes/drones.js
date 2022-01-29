const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
 
  Drone.find()
  .then((result) => {
    console.log(result);
    res.render('drones/list', { drones: result })
})
  .catch((err) => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    const {name, propellers, maxSpeed} = req.body;
    Drone.create({name, propellers, maxSpeed})
      .then(drone => {
        console.log('new drone', drone);
        res.redirect('/drones');
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  });

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
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
