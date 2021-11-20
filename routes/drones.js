const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((drones) =>{
      console.log(drones);
      res.render("../views/drones/list.hbs", { drones })
    })
    .catch((err) => {
      console.log(err)
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render("../views/drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  DroneModel.create({name, propellers, maxSpeed})
  .then((drones) => {
    console.log(newDrone)
    res.render("../views/drones/list.hbs")
  })
  .catch((err) => {
    console.log(err);
    res.render('/views/drones/create-form.hbs')
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
