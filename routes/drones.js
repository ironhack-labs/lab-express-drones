const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
  .then((result)=>{
  //console.log(result)
  res.render('drones/list',{drone: result})
  })
  .catch((error)=>{
  console.log(error)
  })
  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
  .then((result)=>{
  //console.log(result)
  res.redirect('/drones')
  })
  .catch((error)=>{
  console.log(error)
  res.redirect('/drones/create')
  })
  
});

router.get('/drones/:_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(req.params)
  Drone.findById(req.params._id)
  .then((result)=>{
    console.log(result)
    res.render('drones/update-form', result)
  })
  .catch((error)=>{
  console.log(error)
  res.redirect('/drones/update-form')
  })
  
});

router.post('/drones/:_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params._id, req.body)
  .then((result)=>{
  //console.log(result)
  res.redirect('/drones')
  })
  .catch((error)=>{
  console.log(error)
  res.redirect('/drones/update-form')
  })
});

router.post('/drones/:_id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  console.log(req.params)
  Drone.findByIdAndDelete(req.params._id)
    .then((result)=>{
    console.log(result)
    res.redirect('/drones')
    })
    .catch((error)=>{
    console.log(error)
    })
    
});

module.exports = router;
