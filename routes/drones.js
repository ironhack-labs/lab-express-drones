const express = require('express');
const Drone = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((dbDrones)=> {
      console.log(dbDrones)
      res.render('drones/list', dbDrones)
  })
  .catch( error => console.log('Error when finding drones', error));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const body = req.body;
  Drone.create(body)
  .then((dbDrone) => {
    console.log(dbDrone)
    res.redirect('/drones')
  })
  .catch(e => console.log('Error', e))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  Drone.findById(droneId)
  .then((drone)=> res.render('drones/update-form',drone))
  .catch((error)=> error)
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const body = req.body;
  const droneId = req.params.id;
  Drone.findByIdAndUpdate(droneId,body)
  .then(()=> res.redirect('/drones'))
  .catch((error)=> error)
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(()=> res.redirect('/drones'))
  .catch((error)=> error)
});

module.exports = router;
