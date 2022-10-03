const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(dronesFromDb => {
    res.render("drones/list", {drones: dronesFromDb})
  })
  .catch(error => {
    console.log("error getting drones from DB" , error)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
Drone.create(droneDetails)
    .then(droneDetails => {
      res.redirect("/drones");
    })

    .catch(err => {
      console.log("error creating new drone in DB", err);
      next();
    });
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id= req.params.droneId;

  Drone.findById(req.params.droneId)
        .then(droneDetails => {
          res.render("drones/update-form", droneDetails)
        })

        .catch(err => {
      console.log("error creating new drone in DB", err);
      next();
    });
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.droneId;

  const newdroneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.findByIdAndUpdate(droneId, newdroneDetails)
      .then(() => {
        res.redirect ("/drones")
      })

      .catch(err => {
        //console.log("error creating new drone in DB", err);
        res.render ("drones/create-form")
        next();
      });
});

router.post('/drones/:droneId/delete', (req, res, next) => {
  Drone.findByIdAndDelete (req.params.droneId)
      .then(() => {
        res.redirect ("/drones");
      })

      .catch(err => {
        console.log("Error deleting drone...", err);
        next()
      });
});

module.exports = router;
