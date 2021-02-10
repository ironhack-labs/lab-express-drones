const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model') //importar modelo del drone
const router = express.Router();

router.get('/drones', (req, res, next) => {
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
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const newDrone = req.body
    const name = newDrone.name
    const propellers = newDrone.propellers
    const maxSpeed = newDrone.maxSpeed
  Drone.create(
   newDrone
  ).then((addedDrone) =>{
    console.log(`Agragaste exitosamente a ${addedDrone}`)
    res.redirect("/drones")
  }).catch((err)=>{
    console.log(`Error al agregar dron:${err}`)
  })

}); 

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  Drone.findById(id)
  .then((droneToUpdate) => {
    res.render('drones/update-form',{dron:droneToUpdate})
  })
  .catch(e=>next(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
    const id=req.params.id
    const {name, propellers,maxSpeed} = req.body

    Drone.findByIdAndUpdate(id,{name, propellers,maxSpeed},{new:true})
    .then((droneUpdated) =>{
      console.log("Updated with success!")
      res.redirect('/drones')
    }).catch((err)=>{
      console.log(err)
      next(error)
    })

})



router.post('/drones/:id/delete', (req, res, next) => {
    const id = req.params.id
    Drone.findByIdAndRemove(id)
    .then((deletedDrone)=>{
      console.log(`You have deleted with success the drone ${id}`)
      res.redirect('/drones')
    }).catch((err)=>{
      console.lod(err)
      next(error)
    })
});

module.exports = router;
