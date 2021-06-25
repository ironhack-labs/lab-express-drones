const express = require('express');
const router = express.Router();

const DroneModel = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  
  DroneModel.find()
    .then((drones) => {
      res.render('drones/list.hbs', {drones});
    })
    .catch((err) => {
      console.log('Something went wrong!', err);
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone     //show form to create drone
  res.render('drones/create-form.hbs'); //name form)
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.create({name, propellers, maxSpeed})
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => {
      next('Create failed!', err);
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id;
  
  DroneModel.findById(id)
    .then((drone) => {
      res.render('drones/update-form.hbs', {drone});
    })
    .catch((err) => {
      next('Edit failed!', err);
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {name, propellers, maxSpeed} = req.body; 
  let id = req.params.id;
  
  DroneModel.findByIdAndUpdate(id)
    .then((drone) => {
      res.redirect('/drones/');
    })
    .catch((err) => {
      next('Edit failed!', err);
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
