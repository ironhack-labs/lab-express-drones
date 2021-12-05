const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((allTheDrones)=>{
    console.log("All the drones from DB: ", allTheDrones)
    res.render('drones/list',{drone:allTheDrones})
  })
  .catch(err=>console.log('Error al buscar TODOS los Drones en DB:', err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name,propellers,maxSpeed} = req.body
  Drone.create({name,propellers,maxSpeed})
  .then(()=>{
    console.log('NEW DRONE CREATED')
    res.redirect('/drones')
  })
  .catch((err)=>{
    console.log(err)
    res.render('drones/create-form')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
