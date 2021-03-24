const express = require('express');

// require the Drone model here
const Drones = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drones.find()
    .then(drones =>{
      res.render('drones/list', { drones })
      })
    .catch(err => {console.log(err);
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed} = req.body;
  const addNewDrone = {
     name: name,
     propellers: propellers,
     maxSpeed: maxSpeed,
  }

  Drones.create(addNewDrone)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/drones/create')
     });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;

  Drones.findById(id)
  .then(drone => { res.render('drones/update-form', { drone })})
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { droneName, droneProp, droneSpeed } = req.body;
  const { id } = req.params;

  Drones.findByIdAndUpdate(id, {name: droneName, propellers: droneProp, maxSpeed: droneSpeed})
  .then(() => {
    res.redirect('/drones')
  })
  .catch(err =>{
    console.log(err);
    res.redirect(`/drones/${id}/edit`)
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id} = req.params

  Drones.findByIdAndDelete(id)
  .then(()=>{
    res.redirect('/drones')
  })
  .catch(err =>{
    console.log(err)
  })
});

module.exports = router;
