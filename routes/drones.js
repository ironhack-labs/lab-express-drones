const express = require('express');
const Drone = require('../models/Drone.model.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  
    Drone.find()
    .then((allDrones) => {
      console.log(allDrones)
      res.render("drones/list", {allDrones})
    }).catch(error => {
      console.log("No pudimos conseguir los drones")
      next(error)
    })

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  
  Drone.create({
    name, propellers, maxSpeed
  })
  .then((droneCreate) =>{
    res.redirect('/drones')
  })
  .catch(error => {
    res.render('drones/create-form')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params

  Drone.findById(id)
  .then((droneToFindEdit) =>{
    res.render('update-form', {drones : droneToFindEdit})
  })
  .catch(e=>next(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true})
  .then((droneActualizado) => {res.redirect(`/drones/${droneActualizado.id}`)})
  .catch(error => next(error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id

  Drone.findByIdAndDelete(id)
  .then(() =>{
    res.redirect('/drones')
  })
  .catch((error)=> next(error))
});

module.exports = router;
