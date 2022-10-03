const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((response) => {
   // res.send(response);
    res.render("drones/list", {drone: response})
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  Drone.create(newDrone)
  .then((newDrone)=>{
   res.redirect("/drones")

  })
  .catch(err => {
    console.log("error creating new dronr in DB", err);
    next();
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then((response)=>{
    console.log(response)
    res.render("drones/update-form", response)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const editedDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  const id = req.params.id
  Drone.findByIdAndUpdate(id, editedDrone)
  .then(() => {
    res.redirect("/drones")
  })
  .catch(err => {
    console.log("error creating new dronr in DB", err);
    next();
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
Drone.findByIdAndDelete(req.params.id)
.then(()=>{
  res.redirect("/drones")
})
.catch(err => {
  console.log("error creating new dronr in DB", err);
  next();
})

});

module.exports = router;
