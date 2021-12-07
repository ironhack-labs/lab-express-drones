const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(drones =>{
    console.log(drones)
    res.render('drones/list', {drones})
  })
  .catch(err => {
    console.log(err)
    res.send('Error')
})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
  
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed, ... rest} = req.body

  Drone.create({name, propellers, maxSpeed})
    .then(drone => {
      res.redirect('/drones')
    })
    .catch(err => {
      console.log(err)
      res.send('Error')
  })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  Drone.findById(id)
    .then(drone => {
      res.render('drones/update-form')
    })
    .catch(err => {
      console.log(err)
      res.send('Error')
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const {name, propellers, maxSpeed, ... rest} = req.body

  Drone.findByIdAndUpdate(id,{name, propellers, maxSpeed}, {new:false})
    .then(drone => {
      res.redirect('/drones')
    })
    .catch(err => {
      console.log(err)
      res.send('Error')
  })

});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  console.log(req.params)
    Drone.findByIdAndDelete(id)
    .then(()=>{
        res.redirect('/drones')
    })
    .catch(error=>{
        console.log(error)
        res.redirect('/drones')
    })
});

module.exports = router;
