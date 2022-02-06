const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
   .find()
   .then(drones => res.render('./drones/list', {drones}))
   .catch(err=> console.log(err))

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, maxSpeed, propellers } = req.body
  
  Drone
  .create ({ name, maxSpeed, propellers })
  .then(()=> res.redirect('/drones'))
  .catch(err=>{
      console.log(err)
      res.render('create-form')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone
   .findById(req.params.id)
   .then(foundDrone => 
    res.render('drones/update-form', foundDrone)
    )
    .catch(err=> console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { _id, name, maxSpeed, propellers } = req.body
  Drone
   .findByIdAndUpdate(_id, { name, maxSpeed, propellers })
   .then(()=> res.redirect('/drones'))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params
  Drone
   .findByIdAndDelete(id)
   .then(()=> res.redirect('/drones'))
   .catch(err=> console.log(err))

 });

module.exports = router;
