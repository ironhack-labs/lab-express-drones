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
  const droneId = req.params.id;
  // console.log(droneId);
  DroneModel.findById(droneId)
    .then(droneFromDB => {
      res.render('drones/update-form', {drone: droneFromDB});
    })
    .catch(err => {
      console.log('Ops!! Something went wrong while trying to get drone to be updated', err);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  console.log(droneId);
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new:true})
  .then(updatedDrone => {

    console.log('updated drone', updatedDrone);
    res.redirect('/drones');
  })
  .catch(err => {
    console.log('Ops!! Something went wrong while trying to update drone', err);
    res.render('drones/update-form', {drone: { name, propellers, maxSpeed }});
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.id;
  DroneModel.findByIdAndDelete(droneId)
  .then(() => res.redirect('/drones'))
  .catch(error => console.log('Something went wrong while trying to delete done',error));
});

module.exports = router;
