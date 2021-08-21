const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
      DroneModel.find()
      .then(allDronesFromDB =>{
        console.log(allDronesFromDB)
        res.render('drones/list', {drones: allDronesFromDB})
      })
      .catch(error => console.log("An error occurred while getting drones from database: ", error))
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const{name, propellers, maxSpeed} = req.body;

  DroneModel.create({name, propellers, maxSpeed})
  .then(newSavedDrone =>{
    res.redirect('/drones')
  })
  .catch(error => console.log("An error occurred while saving a drone to the database: ", error ));
});


router.post('/drones/:droneId/delete', (req, res, next) => {
  
  DroneModel.findByIdAndDelete(req.params.droneId)
  .then(() =>{
    res.redirect('/drones')
  })
  .catch(error => console.log("An error occurred while deleting a drone from the database: ", error )); 
});


router.get('/drones/:droneId/edit', (req, res, next) => {
    DroneModel.findById(req.params.droneId)
    .then((droneToBeEdited) =>{
      res.render("drones/update-form", droneToBeEdited)
    })
    .catch(error => console.log("An error occurred while deleting a drone from the database: ", error )); 
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;

  DroneModel.findByIdAndUpdate(req.params.droneId, {name, propellers, maxSpeed}, {new:true})
  .then(updatedDrone =>{
    res.redirect("/drones")
  })
  .catch(error => console.log("An error occurred while updating a drone in the database: ", error )); 
});


module.exports = router;
