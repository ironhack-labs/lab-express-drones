const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');
const e = require('express');


router.get('/drones', (req, res, next) => {
 Drone.find()
 .then((dronesFromDB) => {
  const data = { drones: dronesFromDB}
  res.render('drones/list', data);
 })
 .catch(error => {
  console.log("Error getting list of drones from DB", error);
  next(error)
 })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const newDrone = {
    name: req.body.name,
    propellors: req.body.propellors,
    maxSpeed: req.body.maxSpeed
  }
  Drone.create(newDrone)
  .then((newDrone) => {
    res.redirect('/drones')
  })
  .catch(error => {
    console.log("error creating new drone", error);
    next(e)
    res.render('drones/create-form')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
 const id = req.params.id;

 Drone.findById(id)
 .then(droneFromDB => {
  res.render('drones/update-form.hbs', droneFromDB)
 })
 .catch(error => {
  console.log("error getting drone details from DB", error);
  next(error);
 })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  const {name, propellors, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(id, {name, propellors, maxSpeed}, {new: true})
  .then(updatedDrone => res.redirect(`/drones/${updatedDrone.id}`))
  .catch(error => next(error))
});

router.post('/drones/:id/delete', (req, res, next) => {
    const {id} = req.params;

    Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones/"))
    .catch(error => next(error))
});

module.exports = router;
