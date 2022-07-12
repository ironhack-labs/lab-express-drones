const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get('/drones', (req, res, next) => {

  Drone.find()
    .then( (dronesFromDB) => {
      console.log("finding the drones seems to work...")
      //console.log(dronesFromDB)

      const data = {
        dronesArr: dronesFromDB
      }
      res.render("drones/list", data)
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  //console.log(req.body)

  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(droneDetails)
  .then( () => {
    res.redirect("/drones");
  })
  .catch( (error) => {
    console.log("error creating drone in DB", error);
    next(error);
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    //console.log(req.params)
    const id = req.params.id; 
  
    Drone.findById(id)
    .then( (droneDetails) => { 
      res.render("drones/update-form", droneDetails);
    })
    .catch( (error) => {
      console.log("Error updating drone details in DB", error);
      next(error);
    })
  })


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;

  const update = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }
  Drone.findByIdAndUpdate(id, update)
  .then( () => {
    res.redirect("/drones");
  })
  .catch( (error) => {
    console.log("Error updating drone in DB", error);
    next(error);
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;
  Drone.findByIdAndRemove(id)
  .then( () => {
    res.redirect('/drones');
  })
  .catch( (error) => {
    console.log("Error drone book in DB", error);
    next(error);
  })
});

module.exports = router;
