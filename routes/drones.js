const express = require('express');

const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
 Drone.find()
 .then (allTheDronesFromDB => {
   console.log(allTheDronesFromDB);
   res.render('drones/list', {drones: allTheDronesFromDB});
 })
 .catch(error =>
  console.log(`Error while getting the drones from the DB: ${error}`));
});

router.get('/drones/create', (req, res, next) => {
 res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;

  Drone.create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(error => `Error while creating a new drone: ${error}`);
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
