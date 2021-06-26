const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model');

//get home page
router.get('/drones', (req, res, next) => {

  DroneModel.find()
    .then((drones) => {
        res.render('drones/list.hbs', {drones})
    })
    .catch(() => {
        next('Find failed')
    })
});

// handling GET request to /drones/create
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

// handling POST request to /drones/create
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body

  DroneModel.create({name, propellers, maxSpeed})
    .then(()=>{
      res.redirect('/drones') 
    })
    .catch(()=>{
      next('Create failed')
    })

});







//asdasd
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let dynamicDroneId = req.params.id

  // grab all the drone details
  // show them in a new edit form
  DroneModel.findById(dynamicDroneId)
    .then ((drones)=> {
      //pass the drones value to the edit form
      req.render('drones/update-form.hbs', {drones})
    })
    .catch(()=> {
      next('Cannot find the damn drone details')
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let dynamicDroneId = req.params.id
  //destructure drone
  const {name, propellers, maxSpeed } = req.body

  DroneModel.findByIdAndUpdate(dynamicDroneId,{name, propellers,maxSpeed})
  .then (()=> {
    //redirect to start with slash from Guns n' Roses
    res.redirect('/drones')
  })
  .catch (()=>{
    next('Edit failed')
  })
  
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  //create variable for dynamic ID
  let dynamicDroneId = req.params.id

  DroneModel.findByIdAndDelete(dynamicDroneId)
    .then(()=>{
      res.redirect('/drones')
    })
    .catch(()=>{
      next('Failed to delet drone')
    })
  
});

module.exports = router;
