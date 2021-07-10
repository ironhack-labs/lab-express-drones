const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(dronesList=>{
    //console.log(dronesList)
    res.render("drones/list", {dronesList: dronesList})
    
  })
  .catch(err=> console.log(err))
});



router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
  .then(createdDrone =>{
    console.log(createdDrone)
    res.redirect("/drones")
  })
  .catch(err=> console.log("Some error ocurred", err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then(droneId=> res.render("drones/update-form", {drone : droneId}))
  .catch(err=> console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  //const id = req.params.id;
  const { name, propellers, maxSpeed } = req.body
  
  Drone.findByIdAndUpdate(req.params.id , { name, propellers, maxSpeed })
  .then( updatedDrone => {
    console.log("update succesful", {updatedDrone});
    res.redirect('/drones'); 
  })
  .catch((err) => {
    console.log(err)
    res.redirect('/drones');
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(deletedDrone=>{
    console.log(`this ${deletedDrone} was deleted successfully`)
    res.redirect("/drones")
  })
  .catch(err=> console.log("There was an error deleting the drone"))
});

module.exports = router;
