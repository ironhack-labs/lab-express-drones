const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model') //importar modelo del drone
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
  .then((droneList) =>{
    res.render('drones/list',{droneList})
  })
  .catch((err)=>{
    console.log(`Ha ocurrido un error ${err}`)
    next(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const newDrone = req.body
    const name = newDrone.name
    const propellers = newDrone.propellers
    const maxSpeed = newDrone.maxSpeed

  Drone.create({
    name:name,
    propellers:propellers,
    maxSpeed:maxSpeed
  }).then((addedDrone) =>{
    console.log(`Agragaste exitosamente a ${addedDrone}`)
    res.redirect("/drones")
  }).catch((err)=>{
    console.log(`Error al agregar dron:${err}`)
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
