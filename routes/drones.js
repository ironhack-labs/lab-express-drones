const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model");
const { db } = require("../models/Drone.model");




// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
Drone.find( function(err, result) {
  
  if (err) { return console.log(err) }
            
  res.render('drones/list', {dronesfound: result})
  
})


});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
})

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body

  Drone.create( {name, propellers, maxSpeed} )
  .then(newDrone => {
    console.log(newDrone)
  })
  .catch((err) => console.log(err))
  
  Drone.find( function(err, result) {
  
    if (err) { return console.log(err) }
              
    res.render('drones/list', {dronesfound: result})
    
  })



})

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
