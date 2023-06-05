const express = require('express');
const router = express.Router();

const DroneModel = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then(dronesFromDB => {
      res.render("drones/list", {drones: dronesFromDB})
    })
    .catch(e => {
      console.log("Error getting drones", e)
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  DroneModel.create({name, propellers, maxSpeed})
    .then(newDrone => {
      console.log("drone created: ", newDrone)
      res.redirect("/drones")
    })
    .catch(e => {
      console.log("Error creating drone", e)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  DroneModel.findById(req.params.id)
    .then(droneFromDB => {
      res.render("drones/update-form", droneFromDB)
    })
    .catch(e => {
      console.log("Error getting drone", e)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  DroneModel.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
    .then(droneFromDB => {
      console.log("drone updated: ", droneFromDB)
      res.redirect("/drones")
    })
    .catch(e => {
      console.log("Error updating drone", e)
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
  .then(droneFromDB => {
    console.log("drone deleted, id was: ", req.params.id)
    res.redirect("/drones")
  })
  .catch(e => {
    console.log("Error deleting drone", e)
  })
});

module.exports = router;
