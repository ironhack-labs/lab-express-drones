const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(droneFromDB =>{
    //console.log('La base de datos tiene: ', droneFromDB)
    res.render('drones/list',{Drones:droneFromDB})
  })
  .catch(error=>console.log('Ha surgido un error: ', error))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {role,...restDrone} = req.body
  console.log('El role: ',role)
  console.log('El restDrone:',restDrone)
  
  Drone.create(restDrone)
  .then(() =>{
    res.redirect('/drones') //IMPORTANTE PARA REGRESAR A UNA VISTA ANTERIOR, EN ESTE CASO EL GET DE /DRONES Y ME MUESTRE DE NUEVO LA LISTA
  })
  .catch(error => console.log('Ha salido un error en la creacion del nuevo drone',error))

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  Drone.findById(id)
  .then(drone =>{
    res.render('drones/update-form',drone)
  })
  .catch(eror=>console.log('Se tiene un error en el update: ',error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body
  console.log(id)
  console.log('El body: ',req.body)
  Drone.findByIdAndUpdate(id,{name, propellers, maxSpeed},{new:true})
  .then(upDateDrone =>{
    console.log('El drone actualizado: ',upDateDrone)
    res.redirect('/drones')
  })
  .catch(error => console.log('Ha surgido un error en la actualizacion', error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params
  console.log('que tiene el id:',id)
  Drone.findByIdAndDelete(id)
  .then(()=>res.redirect('/drones'))
  .catch(error => console.log('Ha salido un error al momento de borrar el drone: ',error))
});

module.exports = router;
