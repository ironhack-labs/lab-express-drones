const express = require('express');
const router = express.Router();
const ListOfDrones = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  ListOfDrones.find()
    .then((alldrones)=> {
      res.render('drones/list', {alldrones})
    }).catch((error)=> {
      console.log('the list of drones is not available')
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {
    name,
    propellers,
    maxSpeed
  } = req.body

  ListOfDrones.create({ name, propellers, maxSpeed })
    .then((response)=>{
      res.redirect('/drones')
    }).catch((error)=>{
      //res.redirect('/drones/create')
      console.log('the drone was not added')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params

  ListOfDrones.findById(id)
    .then((drone)=>{
      res.render('drones/update-form', {drone} )
    }).catch((error)=>{
      console.log("can't edit the drone")
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body

  ListOfDrones.findByIdAndUpdate(id, {name, propellers, maxSpeed})
    .then((drone)=>{
      res.redirect('/drones')
    }).catch((error)=>{
      console.log("edit not successful")
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params
  ListOfDrones.findOneAndRemove(id)
    .then((result) => {
      res.redirect('/drones')
    }).catch((error) =>{
      console.log("the drone wasn't deleted")
    })
});

module.exports = router;
