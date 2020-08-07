const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.model.js")

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((dronesFromDb)=>{
    console.log(dronesFromDb)
    res.render('drones/list', {drones: dronesFromDb})
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
  .then((createdDrone) => {
    res.redirect("/drones")
  })
  .catch((err) => console.log(`Error creating drone: ${err}`));

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone

});

module.exports = router;
