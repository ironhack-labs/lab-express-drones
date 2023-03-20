const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model")
// require the Drone model here

router.get('/drones', (req, res, next) => {
// Iteration #2: List the drones
  Drone.find()
  .then (dronesFromDb =>{
    res.render("drones/list" ,{drones: dronesFromDb} )
  })
  .catch(e => {
    console.log("error getting drones from DB", e);
    next(e);
  });
  

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 res.render("drones/create-form")
});

router.post('/drones', (req, res, next) => {
  // Iteration #3: Add a new drone
  
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(droneDetails)
  .then(droneFromDb => {
    console.log(droneFromDb)
    res.redirect("/drones")
  })
  .catch(e => {
    console.log("error creating new drone", e);
    next(e);
  });

});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  console.log(id)

  Drone.findById(id)
  .then (droneToEdit =>{
    res.render("drones/update-form", {drone: droneToEdit})
  })

  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => {
      res.redirect('/drones')
    })
    .catch(e => {
      res.redirect('/drones/:id/edit')
    });

});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
