const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model")
// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((dataFromDB) => {
      console.log(dataFromDB)
      res.render("drones/list", { drones: dataFromDB })
    })
    .catch(err => console.log(" error getting data from DB", err))

});

router.get('/drones/create', (req, res, next) => {


  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {

  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(newDrone)
    .then(newDrone => {
      res.redirect("/drones")
    })
    .catch(err => console.log("error creating new dron", err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
    .then((droneDetails) => {
      res.render("drones/update-form.hbs", droneDetails)
    })
    .catch(err => console.log("error updating new dron", err))
});

router.post('/drones/:id/edit', (req, res, next) => {

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
