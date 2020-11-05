const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
   .then( drones => {
     res.render('drones/list.hbs', { drones })
   })
   .catch(err => {
     console.log(err)
   })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const newDrone = req.body
  Drone.create(newDrone)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => {
      res.redirect('/drones/create')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  let droneId = req.params.id  
  Drone.findById(droneId)
    .then((drone)=> {
      res.render('drones/update-form.hbs', drone)
    })
    .catch(err => {
      console.log(err)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed} = req.body
  Drone.findOneAndUpdate(req.params.id, req.body)
    .then(update => {
      console.log(update)
      res.redirect('/drones')
    } 
    )
    .catch(err => {
      console.log(err)
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params
  Drone.findByIdAndRemove(id)
    .then(() => res.redirect('/drones'))
    .catch(err => {
      console.log(err)
    })
});

module.exports = router;
