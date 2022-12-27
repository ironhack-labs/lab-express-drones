const express = require('express');
const router = express.Router();
const Drones = require("../models/Drone.model.js")
const mongoose = require("mongoose");
//the Drone model here

router.get('/drones',(req, res, next) => {
   Drones.find({}, function(error,drones){
      if (error) return console.log(error)
     // console.log(data)
      res.render("drones/list", {drones})

    })
  // const drones = await Drones.find()
  // console.log(drones)
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
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
