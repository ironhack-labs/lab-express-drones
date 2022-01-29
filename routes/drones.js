const express = require('express');
const { findById } = require('../models/Drone.model');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
  .then(allTheDronesFromDB=> {
    res.render('drones/list.hbs', {allTheDronesFromDB});
    console.log(allTheDronesFromDB)
  })
  

  .catch(error => {
    console.log('Error while doing something ', error);
    next(error);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed} = req.body;

  DroneModel.create({ name, propellers, maxSpeed})
    .then(newDrone=>{
      console.log(newDrone);
      res.redirect('/drones'); 
    })
    .catch(error => {console.log(error); next(error)});
    
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here,
  const droneID = req.params.id;
  DroneModel.findById(droneID)
  .then(droneToEdit => {
    console.log( droneToEdit )
    res.render('drones/update-form', { drone: droneToEdit })
    
  })
  .catch(error =>  next(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const  droneID  = req.params.id;
  const { name, propellers, maxSpeed} = req.body;

  DroneModel.findByIdAndUpdate(droneID, { name, propellers, maxSpeed}, {new: true})
    .then(()=>{ ;
      res.redirect('/drones'); 
    })
    .catch(error => {console.log(error); next(error)});

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const  droneID  = req.params.id;

  DroneModel.findByIdAndDelete(droneID)
  .then(() => res.redirect('/drones'))
  .catch(error => next(error));
});

module.exports = router;
