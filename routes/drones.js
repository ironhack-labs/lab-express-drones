const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model.js')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((response) => {
    res.render('drones/list.hbs',{
      droneList : response
    })
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  let droneToAdd = {
     name: req.body.name, 
     propellers: req.body.propellers, 
     maxSpeed: req.body.maxSpeed 
    }

    Drone.create(droneToAdd)
    .then((result) => {
      res.redirect('/drones')
    })
    .catch((err) => {
      res.redirect('/drones/create')
      // !!!!!! next(err)
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
