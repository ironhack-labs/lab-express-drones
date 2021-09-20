const e = require('express');
const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find({})
  .then((dbDrones) => {
    res.render("drones/list", {
      droneList: dbDrones
    })

  })
  .catch(() => {})

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    console.log("que viene en", req.body)
    const {name, propellers, maxSpeed} = req.body
    Drone.create({
      name,
      propellers,
      maxSpeed
    })
    .then((newDrone) => {
      console.log(newDrone)
      res.redirect("/drones")
    })
    .catch(() => {console.log(e)})
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId = req.params.id;
  Drone.findById(droneId)
  .then((droneToEdit) => {
    console.log(droneToEdit)
    res.render("drones/update-form.hbs", {drone: droneToEdit})
  })
  .catch(() => {console.log(e)})
});

router.post('/drones/:id/edit', (req, res, next) => {
// Iteration #4: Update the drone
  // ... your code here
  const droneId=req.params.id
  const {name,propellers,maxSpeed}=req.body
  Drone.findByIdAndUpdate(droneId,{name,propellers,maxSpeed},{new:true})
  .then(updateDrone =>{
    res.redirect("/drones/update-form", {drone: updateDrone})
  })
  .catch(err =>next (err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const droneId=req.params.id

  Drone.findByIdAndDelete(droneId)
});

module.exports = router;
