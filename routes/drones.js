const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((droneArr)=> {
      const data = {
        drones: droneArr 
      } 
    res.render("drones/list", data)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 const newDrone = {
  name: req.body.name,
  propellers: req.body.propellers,
  maxPrice: req.body.maxPrice
 }
 Drone.create(newDrone)
 .then( () => {
  res.redirect("/drones")
 })
 .catch ((err) => {
  console.log(error)
  res.redirect("/drones/create")
 })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id
  Drone.findById(droneId)
  .then( (foundDrone) => {
    console.log(foundDrone)
    res.render("drones/update-form", foundDrone)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const updatedDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxPrice: req.body.maxPrice
  }
  const id = req.params.id
  Drone.findByIdAndUpdate(id, updatedDrone)
  .then( () => {
    res.redirect("/drones")
    console.log(updatedDrone)
  })
  .catch( (err) => {
    console.log(err)
    res.redirect("/drones/:id/edit")
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id
  Drone.findByIdAndDelete(id)
  .then( () => {
    res.redirect("/drones")
  })
  .catch( (err) => {
    console.log(err)
  })
});

module.exports = router;
