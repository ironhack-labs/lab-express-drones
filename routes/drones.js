const express = require('express');
const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
 Drone.find()
 .then((droneFromDB) => res.render("./drones/list", {droneFromDB}))
 .catch(err => console.log(`An error occurred while finding drone from the DB: ${err}`))
});

router.get('/drones/create', (req, res, next) => {
 Drone.create()
 .then(() => res.render("./drones/create-form")
 .catch((error) => `Error while rendering a new drone: ${error}`))
});

router.post('/drones/create', (req, res, next) => {
 const {name, propellers, maxSpeed} = req.body;

 Drone.create({name, propellers, maxSpeed})
 .then(() => res.redirect("/drones"))
 .catch((error) => `Error while creating a new drone: ${error}`)
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  Drone.findById(id)
  .then((foundDrone) => {
   res.render("./drones/edit-drone",foundDrone)
    })
   .catch((error) => `Error while editing a drone: ${error}`)
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(id,{name, propellers, maxSpeed}, {new : true})
  .then((foundDrone) => res.redirect("/drones"))
  .catch((error) => `Error while updating a drone: ${error}`)
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params;
  Drone.findByIdAndDelete(id)
  .then(() => res.redirect("/drones")
  .catch((error) => `Error while deleting a drone: ${error}`))
});

module.exports = router;
