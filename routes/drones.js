const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((results) => {
      console.log(results);
      res.render('drones/list', {drones: results});
    })
    .catch((err) => {
      console.log(err);
    });
    
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({name, propellers, maxSpeed})
    .then(drone => {
      console.log('new drone', drone);
      res.redirect('/drones');
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  Drone.findById(id)
    .then(drone =>{
      console.log('drone id', drone);
      res.render('drones/update-form', drone);
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    }); 
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
    .then(drone=>{
      console.log('drone edit', drone);
      res.redirect('/drones');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;
  Drone.findByIdAndRemove(id)
    .then(drone => {
    console.log('drone deleted', drone);
    res.redirect('/drones');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
