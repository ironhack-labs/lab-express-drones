const express = require('express');
const { find } = require('../models/Drone.model');
const router = express.Router();
const Drone=require("../models/Drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
Drone.find()
.then(findedDrones=>{
  res.render("drones/list",{findedDrones})
})
.catch(error => console.log("Error:", error))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
  .then(nuevoDrone=>{
    console.log(nuevoDrone)
    res.redirect("/drones")
  })
  .catch(err=>console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
 const {id}=req.params
 Drone.findById(id)
 .then(drone=>{
   console.log(drone)
   res.render("drones/update-form",{drone})
 })
 .catch(err=>console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  console.log(req.body)
  console.log(req.params)
  const {id}=req.params
  Drone.findByIdAndUpdate(id,req.body,{new:true})
  .then(droneActual=>{
    console.log("Drone actualizado: ", droneActual)
    res.redirect("/drones")
  })
.catch(err=>{
  console.log(err)
  res.redirect("/drones")
})
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
const{id}=req.params
Drone.findByIdAndDelete(id)
.then(()=>{
  console.log("Dron eliminado")
  res.redirect("/drones")
})
.catch(err=>console.log(err))

});

module.exports = router;
