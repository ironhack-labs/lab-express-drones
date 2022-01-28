//jshint esversion:8
const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then(dronesFromDB => {
      //console.log(dronesFromDB);
      res.render('drones/list', {drones: dronesFromDB});
    })
    .catch(err => console.log('Ops!! Something went wrong while retrieving drones from DB.'));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  //console.log({name, propellers, maxSpeed});
  DroneModel.create({name, propellers, maxSpeed})
    .then( droneFromDB => {
      console.log(`Drone name: ${droneFromDB.name} created.`);
    })
    .then(() => res.redirect('/drones'))
    .catch(err => {

      console.log('Ops!! Something went wrong while creating drone', err);
      res.render('/drones/create');
    });
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
