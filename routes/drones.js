const express = require('express');
const Drone = require("../models/Drone.model")
const router = express.Router();



// require the Drone model here

router.get('/drones', (req, res) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((drones) => {
    res.render("drones/list", { drones: drones })
  })
  .catch(err =>{console.log(err)})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
    .then(nuevoDrone =>{
        res.redirect("/drones")
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then((drone)=>{
      res.render("drones/update-form", drone)
     
  })
  .catch((err) => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findByIdAndUpdate(req.params.id, req.body,{new: true})
    .then((droneUpdate)=>{
        res.redirect(`/drones/`)
    })
    .catch((err) => console.log(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
    .then((request) =>{
        res.redirect("/drones")
    })
});

module.exports = router;
