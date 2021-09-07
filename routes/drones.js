const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then(dronesList => {
      console.log('DRONES!!!!!!:',dronesList)

      res.render('drones/list',{dronesList})
    })
    .catch(err => {console.log(err)})


});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
    .then(droneInfo =>{
      console.log('New drone has been created:',droneInfo)
      res.redirect('/drones')
    })
    .catch(err =>{
      console.log(err)
      res.render('drones/create-form')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId = req.params.id;
  Drone.findById(droneId)
    .then(droneInfo => {
      console.log('Info to modify:', droneInfo);
      res.render('drones/update-form', {droneInfo});
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId = req.params.id;
  const {name, propellers,maxSpeed} = req.body
  Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new:true})
    .then(data => {
      console.log('new data:',data)
      res.redirect('/drones')
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const droneId = req.params.id;
  Drone.findByIdAndDelete(droneId)
    .then(data =>{
      console.log('remove drone:', data.name)
      res.redirect('/drones')
    })
});

module.exports = router;
