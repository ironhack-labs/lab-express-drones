const express = require('express');

// require the Drone model here
const recipeSchema = require("../models/Drone.model")

const router = express.Router();

const mongoose = require('mongoose');
var dronesData = mongoose.model('drones', recipeSchema);

router.get('/drones', (req, res, next) => {
  //console.log({})
  // Iteration #2: List the droness
  dronesData.find()
  .then((drones)=>{
    console.log(drones)
    res.render('drones/list.hbs',{drones})
  }).catch((err)=>{
    console.log(err)
  })
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 res.render('drones/drone-create.hbs')
  
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  //console.log(req.body)
  let drone = req.body
  drone.propellers= parseInt(drone.propellers)
  drone.maxSpeed= parseInt(drone.maxSpeed)
  console.log(drone)
  //me llama la atencion tras el create no poner llaves dentro de los parentesis
  dronesData.create(drone)
  .then((drones)=>{
    res.redirect('/drones',{successDrones:true})
  })
  // ... your code here
});


//Therefore when you don't pass a callback you can build a query and eventually execute it.

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  dronesData.findById(req.params.id)
  .then((drones)=>{
    res.render('drones/update-form.hbs',{drones})
  })
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // is sent as
  let drone = req.body
  drone.propellers= parseInt(drone.propellers)
  drone.maxSpeed= parseInt(drone.maxSpeed)
 
  let dronesId= req.params.id
dronesData.findByIdAndUpdate(dronesId, { $set: { name:drone.name , propellers:drone.propellers,maxSpeed:drone.maxSpeed}})
  .then((drones)=>{
    res.redirect("/drones")
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  dronesData.findByIdAndDelete({_id: req.params.id})
    .then(()=>{
      res.redirect("/drones")
    })
  // ... your code here
});

module.exports = router;


