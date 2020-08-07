const express = require('express');

// require the Drone model here
const DroneModel = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones)=>{
      res.render('drones/list.hbs',{drones})
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
    .then((Dronecreated)=>{
      res.render('drones/create-form.hbs',{Dronecreated, successDrone: true})
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drone)=>{
      res.render('drones/update-form.hbs', {drone})
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let droneId = req.params.id;
  DroneModel.findByIdAndUpdate(droneId,{$set:req.body})
    .then(()=>{
      res.redirect('/drones');
    });
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let droneId = req.params.id;
  DroneModel.findByIdAndDelete(droneId)
    .then(()=>{
      res.redirect('/drones');
    });
});

module.exports = router;