const express = require('express');
const { create } = require('../models/Drone.model.js');

// require the Drone model here
const Dron= require('../models/Drone.model.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Dron.find({})
  .then((foundDrones)=>{
    console.log(foundDrones)
    res.render('drones/list', {foundDrones})
    
  })
  .catch(error => console.log(error));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone 
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  //para encontrar los valores es body.<el nombre del input de la form>
  const newName= req.body.name
  const newPropellers= req.body.propellers
  const newSpeed= req.body.speed
  
  Dron.create({
    name: newName,
    propellers: newPropellers,
    maxSpeed: newSpeed
  })
  .then((createdDron)=> {
    res.redirect('/drones')
  })
  .catch(error => console.log(error))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(req.params.id)
  const { id } = req.params
  Dron.findById(id)
  .then((selectedDron)=>{
    res.render('drones/update-form', {dron: selectedDron})
  })
  .catch(error => next(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } =req.params
  console.log(req.body)
  const { name, propellers, maxSpeed} = req.body

  Dron.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true})
  .then((updatedDron) => {
    res.redirect('/drones')
  })
  .catch((error)=> next(error)) 
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id= req.params.id
  Dron.findByIdAndDelete(id)
  .then(()=> {
    res.redirect('/drones')
  })
  .catch((error)=> next(error))
});

module.exports = router;
