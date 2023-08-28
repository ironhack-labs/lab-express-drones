const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(dronesFromDB => {
        res.render('drones/list', {drones: dronesFromDB});
    })
    .catch(error => next(error))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
};

Drone.create(newDrone)
    .then( (newDrone) => {
        res.redirect("/drones");
    })
    .catch( e => {
        console.log("Error creating new drone", e);
        next(e);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
    Drone.findById(id)
        .then((droneToEdit) => {
            res.render('drones/update-form', {drones:droneToEdit});
        })
        .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const submittedInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

    Drone.findByIdAndUpdate("routes/drones", submittedInfo)
        .then(() => {
          res.redirect("/drones")
        })
        .catch(error => {
          res.render("routes/drones")}
          );
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
  .then(() => res.redirect('/drones'))
  .catch(error => next(error));
});

module.exports = router;
