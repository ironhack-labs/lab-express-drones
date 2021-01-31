const express = require('express');
const mongoose = require('mongoose');
// require the Drone model here
const Drone = require("../models/Drone.model")
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((drone) => {
    
    res.render('drones/list',{drones: drone})

    })
  .catch((e) => console.log(`Error finding in the db`, e))
  })
  
;

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
  
});

router.post('/drones/create', (req, res, next) => {
  const {name,propellers,maxSpeed} = req.body;

  Drone.create({name,propellers,maxSpeed})
  .then((newDrone) => console.log(`A new drone named ${newDrone.name} has been added to the DB`))
    .then(() => {
      res.redirect('/drones');
    })

  .catch((e) => console.log(e))
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
