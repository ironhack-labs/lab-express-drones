const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
    Drone.find()
    .then((drones) => {
      console.log(drones);
      res.render("drones/list", { drones });
    })
    .catch((err) => {
      console.log(err);
    });
  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("../views/drones/create-form.hbs")
});

router.post('/drones/create', (req, res) => {
  // Iteration #3: Add a new drone

    const {name, propellers, maxSpeed} = req.body
    Drone.create({name, propellers, maxSpeed})
    .then(newDrone=>{
      console.log(newDrone)
      res.render("../views/newDroneSuccess.hbs", newDrone)
    })
    .catch((err) => {
      console.log(err);
    });
  

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id } = req.params
  Drone.findById(id)
  .then((drone)=>{
    res.render("../views/drones/update-form.hbs", {drone})
  })
  .catch((error)=>{
    console.log(error)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body
    Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true} )
    .then(()=>{
      console.log("functiona")
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params

  Drone.findByIdAndDelete(id)
  .then(()=>{
    res.redirect("/drones");
  })

});

module.exports = router;
