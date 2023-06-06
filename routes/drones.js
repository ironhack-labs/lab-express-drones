const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  
  Drone.find()
  
  .then((dronesFromDB)=>{
    const data = {drones : dronesFromDB}
    res.render("drones/list", data)
  })
  .catch((e) => {
    console.log("error getting list of drones from DB", e);
    next(e);
  });
  


});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const newDrone = {
    
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
      
  };
  Drone.create(newDrone)
    .then((newDrone)=>{
      res.redirect("/drones");

    })
    .catch((e)=>{
      console.log("erroe creating a drone", e);
      next(e);
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
