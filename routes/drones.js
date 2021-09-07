const express = require('express');
const router = express.Router();
const Drone = require ("../models/Drone.model.js")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find ()
    .then (dronesArray => {
      console.log ("dronesArray", dronesArray);
      res.render ("drones/list.hbs", {dronesArray});
    })
    .catch(error => {
      console.log('Error while getting the drones from the DB: ', error);
    
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render ("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body;
  //console.log (name, propellers, speed);
  Drone.create({name,propellers,maxSpeed})
    .then (drone => {
      res.redirect("/drones");
    })
    .catch(error => {
      console.log('Error while creating the drone: ', error);
      res.redirect ("drones/create-form.hbs");
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneToUpdate = req.params.id;
  //console.log("droneToUpdate: ", droneToUpdate)
  Drone.findById (droneToUpdate)
    .then (drone => {
      //console.log ("estedron: ", drone)
      res.render ("drones/update-form.hbs", drone)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneToUpdate = req.params.id;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate (droneToUpdate, {name,propellers,maxSpeed} )
    .then (drone => {
      res.redirect("/drones")
    })
    .catch(error => {
      console.log('Error while updating the drone: ', error);
      res.redirect ("drones/update-form.hbs");
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const droneToDelete = req.params.id;
  Drone.findByIdAndDelete (droneToDelete)
    .then (drone => {      
      res.redirect("/drones")
    })
   .catch(error => {
      console.log('Error while deleting the drone: ', error);
      res.redirect ("/drones");
   })
});

module.exports = router;
