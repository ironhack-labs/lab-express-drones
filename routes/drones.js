const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
  .then((result)=>{
    res.render('drones/list', {drone: result})
  })
  .catch((error)=>{
  console.log(error)
  })
  
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body)
  Drone.create(req.body)
  .then((result)=>{
    console.log(req.body)
    res.redirect(`/drones`)
  })
  .catch((error)=>{
  console.log(error)
  res.redirect(`/drones/create`)
  })
  
});

router.get('/drones/:_id/edit', (req, res, next) => {
  Drone.findById(req.params._id)
  .then((result)=>{
  res.render('drones/update-form', result)
  })
  .catch((error)=>{
  console.log(error)
  })
  /* res.render('drones/update-form', req.params) */
});

router.post('/drones/:_id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params._id, req.body)
            .then((result) => {
                console.log(req.body)
                res.redirect(`/drones`)
            })
            .catch(err => {
                console.log(err)
                res.redirect(`/drones/update-form`)
            })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
