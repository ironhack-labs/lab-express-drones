const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then((drones) =>{
    res.render('drones/list', {drones})
  })
  .catch((err) => next(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body
  DroneModel.create({ name, propellers, maxSpeed })
  .then(()=>{
    res.redirect('/drones')
  })
  .catch(() => res.redirect('/drones/create'))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // console.log(req.params.id)
  DroneModel.findById(req.params.id)
  .then((specificDron) =>{
    res.render('drones/update-form', specificDron)
  })
  .catch((err) => next(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
   const { name, propellers, maxSpeed } = req.body
   DroneModel.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
   .then(()=>{
    res.redirect('/drones')
   })
   .catch(() => res.redirect('/drones/:id/edit'))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  console.log(req.params.id)
  DroneModel.findByIdAndDelete(req.params.id)
    .then(()=>{
      res.redirect('/drones')
    })
    .catch((err) => next(err))
});

module.exports = router;
