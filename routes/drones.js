const express = require('express');
const Drones = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find()
  .then(drones =>{ 
    // console.log(drones)
    res.render('drones/list', { drones })
    })
  .catch(error => {console.log(error)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed} = req.body;
   
     const newDrone = {
        name: name,
        propellers: propellers,
        maxSpeed: maxSpeed,
     }

     Drones.create(newDrone)
       .then(() => {
         res.redirect('/drones');
       })
       .catch(error => {
         console.log(error);
         res.redirect('/drones/create')
        });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drones.findById(id)
  .then(drone =>{
    res.render('drones/update-form', { drone })
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneName, droneProp, droneSpeed} = req.body;
  const { id } = req.params;

  Drones.findByIdAndUpdate(id, {name: droneName, propellers: droneProp, maxSpeed: droneSpeed})
  .then(() => {
    res.redirect('/drones')
  })
  .catch(error =>{
    console.log(error);
    res.redirect(`/drones/${id}/edit`)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params

  Drones.findByIdAndDelete(id)
  .then(()=>{
    console.log('drone deleted')
    res.redirect('/drones')
  })
  .catch(error =>{
    console.log(error)
  })
});

module.exports = router;
