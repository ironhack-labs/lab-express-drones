const express = require('express');
const router = express.Router();

// require the Drone model here
const drones = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  drones.find()
  .then(allDronesFromDB => {
    // console.log('retrieve the drones form DB', allDronesFromDB)
    res.render('drones/list.hbs', {dronesDB: allDronesFromDB})
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form' )
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  drones.create({name, propellers, maxSpeed})
  .then(droneFromDB => {
    // console.log('created drone', droneFromDB)
    res.redirect('/drones')
  })
  .catch(error => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;

  drones.findById(id)
  .then(theDrone => res.render('drones/update-form', {drones: theDrone}))
  .catch(error => {
    console.log('error', error)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  console.log("id",id)
  const {name, propellers, maxSpeed} = req.body;
  drones.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then(updateDrone => {
    console.log('updateDrone', updateDrone)
    res.redirect('/drones')
  })
  .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;
  drones.findByIdAndDelete(id)
  .then(()=> res.redirect('/drones'))
  .catch(error => next(error)) 
});

module.exports = router;
