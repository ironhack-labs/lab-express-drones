const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
 
  Drone.find()
  .then((allDrones) =>{
    //console.log("drones", allDrones)
    res.render("./drones/list",{
      drones: allDrones
    })
  })
  .catch(e => {
    console.log("an error has occured", e)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 const newDrone ={
  name: req.body.name,
  propellers:req.body.propellers,
  maxSpeed: req.body.maxSpeed
 }
 Drone.create(newDrone)
  .then((newDrone)=> {
    res.redirect("/drones")
  })
  .catch(e => {
    console.log("an error has occured", e)
    next(e)
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
