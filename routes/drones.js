const express = require('express');
const Drone = require("../models/Drone.model.js");
const router = express.Router();


// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then( dronesFromDB => {
    console.log(dronesFromDB);
    res.render("drones/list", {drones: dronesFromDB})
  })
  .catch( err => {
    console.log("error getting drones from DB", err);
    next();
  })


});

  //CREATE: display a form
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

//CREATE: process form
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);

  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(droneDetails)
  .then( droneDetails => {
    res.redirect("/drones")
  })
  .catch(err => {
    console.log("error creating new drone in DB", err);
    res.render("drones/create-form");
    next();
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
