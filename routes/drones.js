const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(alltheDronesFromDB => {
      res.render('drones/list', { drones: alltheDronesFromDB })
    })
    .catch(error => {
      console.log('Error while getting the drones from DB: ', error)
      next(error)
    })

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  const droneData = {
    name,
    propellers,
    maxSpeed,
  }

  Drone.create(droneData)
    .then(droneFromDB => {
      //console.log(`new drone created ${droneFromDB.name}`)
      res.redirect('/drones')

    })
    .catch(error => {
      console.log('Error saving drone', error)
      next(error)
    })


});

router.get('/drones/:droneId/edit', (req, res, next) => {

  const droneId = req.params.droneId

  Drone.findById(droneId)
    .then(droneToEdit => {
      res.render('drones/update-form', { drone: droneToEdit })
    })
    .catch(error => {
      console.log('Error while updating the drone', error)
      next(error)
    })

});

router.post('/drones/:droneId/edit', (req, res, next) => {
  const {droneId} = req.params

  const newDataObject = {
    name:req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.findByIdAndUpdate(droneId, newDataObject, {new:true})
  .then(() => {
    res.redirect('/drones')
  })
  .catch(error => {
    console.log('Error while updating data', error)
  })

});

router.post('/drones/:droneId/delete', (req, res, next) => {
 const {droneId} = req.params

 Drone.findByIdAndRemove(droneId)
 .then(()=>{
   res.redirect('/drones')
 })
 .catch(error =>{
   console.log('Error while removing a drone', error)
 })

});

module.exports = router;
