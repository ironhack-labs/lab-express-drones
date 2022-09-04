const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model");



router.get('/drones', (req, res, next) => {
 Drone.find()
  .then((droneArr) => res.render("drones/list", {droneArr}))
  .catch((error)   => console.log(error))
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const newDrone = {
    name:       req.body.name,
    propellers: req.body.propellers,
    maxSpeed:   req.body.maxSpeed
  };

  Drone.create(newDrone)
  .then(() => res.redirect("/drones"))
  .catch((error) => console.log(error))
});

router.get('/drones/:id/edit', (req, res, next) => {
   Drone.findById(req.params._id)
  .then(droneToUpdate => res.render("drones/update-form", {droneToUpdate}))
  .catch((error)      => console.log(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const updatedDrone = {
    name:       req.body.name,
    propellers: req.body.propellers,
    maxSpeed:   req.body.maxSpeed
  };
  Drone.findByIdAndUpdate(req.params._id, updatedDrone)
  .then(()       => res.redirect("/drones"))
  .catch((error) => console.log(error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then( ()      => res.redirect("/drones"))
  .catch((error) => console.log(error))
});

module.exports = router;
