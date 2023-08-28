const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {

  Drone.find()
  .then((dronesFromDB) => {
    const dronesData = dronesFromDB
    res.render("drones/list", {drone: dronesData})
    console.log(dronesData)
  })
  .catch( e => {
    console.log("Error displaying the drones from the DB")
    next(e)
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
  .then(() => {
    console.log(newDrone)
    res.redirect("/drones")
  })
  .catch(e => {
    console.log("Error creating a new drone")
    next(e)
  })


});

router.get('/drones/:id/edit', (req, res, next) => {
  
  const { id } = req.params;
  Drone.findById(id)
  .then(droneToEdit => {
    res.render("drones/update-form", {droneToEdit})
    
  })
  .catch(e => {
    console.log("There was an error while editing your drone")
    next(e)
  })


});

router.post('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params;

  const { name, propellers, maxSpeed} = req.body;
  
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true})
  
  .then(updatedDrone => {
    console.log(updatedDrone.id)
    res.redirect('/drones')})
  .catch(e => {
    console.log("There was an error while updating your drone")
    next(e)
  })

});

router.post('/drones/:id/delete', (req, res, next) => {
   
  const { id } = req.params;
   
    Drone.findByIdAndDelete(id)
      .then(() => res.redirect('/drones'))
      .catch(error => next(error));
});

module.exports = router;
