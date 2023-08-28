const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((allDrones) => {
      // console.log("drones", allDrones)
      res.render("./drones/list", {
        drones: allDrones
      })
    })
    .catch(e => {
      console.log("an error has occured", e)
    })
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
    .then((newDrone) => {
      res.redirect("/drones")
    })
    .catch(e => {
      console.log("an error has occured", e)
      next(e)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Drone.findById(id)
    .then(droneToEdit => {
      res.render("drones/update-form.hbs", { drone: droneToEdit })
    })
    .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id} = req.params;
  const { name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true})
    .then(updateDrone => res.redirect(`/drones`))
    .catch(error => next(error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params;

  Drone.findByIdAndDelete(id)
  .then(() => res.redirect("/drones"))
  .catch(error => next(error));
});

module.exports = router;
