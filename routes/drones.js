const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then( droneArr => {
      res.render("drones/list", {drone: droneArr})
    })
    .catch( err => {
      console.log("error getting drones from DB", err);
      next();
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(droneDetails)
    .then( () => res.redirect("/drones"))
    .catch(() => res.redirect("/drones/create"))
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  Drone.findById(req.params.droneId)
  .then((droneDetails) => {
    res.render('drones/update-form', droneDetails);
  })
  .catch( err => {
    console.log('error getting drone details from DB', err);
  })
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  const droneId = req.params.droneId;

  const newDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }
  Drone.findByIdAndUpdate(droneId, newDetails)
  .then(() => {
    res.redirect('/drones');
  })
  .catch( err=> {
    res.redirect('/drones/:droneId/edit', droneId);
  })
});

router.post('/drones/:droneId/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.droneId)
  .then(() => {
    res.redirect('/drones');
  })
  .catch( err => {
    res.send('error deleting drone...');
  })
});

module.exports = router;
