const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model");



router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then( (dronesFromDB) => {
    const data = {
      dronesArr: dronesFromDB
    };
    res.render("drones/list", data);
  })
  .catch( (error) => {
    console.log("Error getting data from DB", error);
    next(error);
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
})

  

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(droneDetails)
    .then( () => {
      res.redirect("/drones");
    })
    .catch( (error) => {
      console.log("Error getting drone details from DB", error);
      next(error);
    })
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params;
  Drone.findById(droneId)
    .then( (droneDetails) => {
      res.render("drones/update-form", droneDetails);
    })
    .catch( (error) => {
      console.log("Error getting drone details from DB", error);
      next(error);
    })
});


router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.droneId;
  const newDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }
  Drone.findByIdAndUpdate(droneId, newDetails)
    .then( () => {
      res.redirect("/drones");
    })
    .catch( (error) => {
      console.log("Error updating drone in DB", error);
      next(error);
    })

});


router.post('/drones/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {droneId} = req.params;

 Drone.findByIdAndRemove(droneId)
    .then( () => {
      res.redirect('/drones');
    })
    .catch( (error) => {
      console.log("Error deleting drone from DB", error);
      next(error);
    })

});

module.exports = router;
