const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get("/", (req, res, next) => { // Q1 - WHY IS THIS "/" INSTEAD OF "/DRONES"?
  // Iteration #2: List the drones
  Drone.find()
  .then(droneList => res.render("drones/list", {droneList}))
  .catch(err=> console.log(err))
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  const {name, propellers, maxSpeed} = req.body

  Drone.create( {name, propellers, maxSpeed} ) // Q2 - HOW DOES .create DIFFER FROM .insertOne?
  .then (() => res.redirect("/drones"))
  .catch(err=> console.log(err))
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id
  Drone.findById(id)
  .then((drone) => res.render("drones/update-form", drone))
  .catch(err=> console.log(err))
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then(() => res.redirect("/drones"))
  .catch(err=> console.log(err))
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
    // Iteration #5: Delete the drone
  const id = req.params.id
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndDelete(id, {name, propellers, maxSpeed})
  .then(() => res.redirect("/drones"))
  .catch(err=> console.log(err))
});

module.exports = router;
