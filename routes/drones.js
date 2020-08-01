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

/*router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  dronesData.create({name:'Robotic4',propellers:5,maxSpeed:48})
  .then((drones)=>{
    res.render('drones/create-form.hbs',{drones})
  })
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  //me llama la atencion tras el create no poner llaves dentro de los parentesis
  dronesData.create(req.body)
  .then((drones)=>{
    res.render('drones/create-form.hbs',{successDrones:true})
  })
  // ... your code here
});


//Therefore when you don't pass a callback you can build a query and eventually execute it.

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  dronesData.findById(req.params.id)
  .then((drones)=>{
    res.render('drones/update-form.hbs',{successDrones:true})
  })
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // is sent as
  let {name, propellers,maxSpeed}= req.body
  let dronesId= req.params.id
dronesData.findByIdAndUpdate(dronesId, { $set: { name:'humanRobotic' }
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  dronesData.findByIdAndDelete({_id: req.params.id}, }
    .then(()=>{
      res.redirect()
    })
  // ... your code here
});*/

module.exports = router;
