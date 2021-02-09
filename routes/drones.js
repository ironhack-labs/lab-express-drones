const express = require('express');

// require the Drone model here
const Drone =require('../models/Drone.model')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
  .then((droneList)=>{
    let droneFound = {droneObject: droneList}
    console.log(droneFound)
    res.render('drones/list',{droneObject: droneList})
  })

  .catch(error=>{
    console.log("No se encontraron los drones")
    next(error)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  res.render('drones/create-form')

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body)

const modelName = req.body.droneModel
const numberOfPropellers = req.body.dronePropellers
const maxSpeed = req.body.maximumSpeed

Drone.create({
  name: modelName,
  propellers: numberOfPropellers,
  maxSpeed: maxSpeed
})
.then((droneCreated)=>{
  console.log(`Se creó el modelo:${droneCreated}`)
})
  .catch(error=>{
    console.log(error)
  })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
