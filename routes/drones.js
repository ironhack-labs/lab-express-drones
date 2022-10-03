const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
   DroneModel.find()
   .then(dronesFromDB => {
    res.render("drones/list", {dronesArray: dronesFromDB})
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
    maxSpeed: req.body.maxSpeed,
  }

  DroneModel.create(droneDetails)
  .then( droneDetails => {
    res.redirect("/drones")
  })
  .catch( err => {
    console.log("error creating new drone in DB", err);
    next();
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  DroneModel.findById(req.params.id)
  .then((droneDetails) => {
    res.render("drones/update-form", droneDetails)
  })
  .catch( err => {
    console.log("Error getting drone details from DB...", err);
    next();
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id;

  const newDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }

  DroneModel.findByIdAndUpdate(id, newDetails)
  .then(() => {
    res.redirect("/drones");
  })
  .catch(err => {
    console.log("Error updating drone...", err);
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones")
  })
  .catch(err => {
    console.log("Error deleting drone...", err);
    next();
  });
});

module.exports = router;
