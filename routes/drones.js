const express = require('express');

const Drone = require("../models/drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then((DronesFromDB) => {
      res.render("drones/list", { DronesFromDB })
    })
    .catch((error) => `Error while fetching all drones: ${error}`);
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
  console.log('all clear here');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  console.log({ name, propellers, maxSpeed });

  Drone.create({ name, propellers, maxSpeed },)
    .then(() => res.redirect('/drones'))
    .catch((error) => `Error while creating drone: ${error}`);
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
