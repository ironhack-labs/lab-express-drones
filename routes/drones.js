const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find({})
  .then((dbDrones)=>{
    res.render("drones/list",{dronesList:dbDrones})
  })
  .catch(()=>{})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log('que viene en ', req. body)
  const {name,propellers,maxSpeed}= req.body
  Drone.create({
    name,
    propellers,
    maxSpeed
  })
  .then((newDrone)=>{
    console.log(newDrone)
    res.redirect("/drones")
  })
  .catch((e)=>{console.log(e)})
});
//EDITAR
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId=req.params.id
Drone.findById(droneId)
.then((droneToEdit)=>{
  console.log(droneToEdit)
  res.render("drones/update-form.hbs",{drone:droneToEdit})
})
.catch((e)=>{console.log(e)})
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
const droneId=req.params.id
const {name,propellers,maxSpeed}=req.body
Drone.findByIdAndUpdate(droneId,{name,propellers,maxSpeed},{new:true})
.then(updateDrone =>{
  res.redirect(`/drones/${updateDrone.id}/edit`)
})
.catch(err =>next (err))
});
//ELIMINAR
router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const droneId  = req.params.id
 
  Drone.findByIdAndDelete(droneId)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});



module.exports = router;
