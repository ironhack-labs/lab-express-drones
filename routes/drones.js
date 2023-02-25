const express = require('express')
const router = express.Router()

// require the Drone model here
const Drone = require('../models/Drone.model')

// Iteration #2: List the drones
router.get('/drones', async (req, res, next) => {
  try {
    const allDrones = await Drone.find()
    res.render('drones/list', { drones: allDrones })
    //res.json(allDrones)
  } catch (error) {
    next(error)
  }
})

// Iteration #3: Add a new drone
router.get('/drones/create', async (req, res, next) => {
  try {
    const allDrones = await Drone.find()
    res.render('drones/create-form', allDrones)
  } catch (error) {
    next(error)
  }
})

// Iteration #3: Add a new drone
//If there is an error, render again the view so the user can try again to create a drone >> how to do this?
router.post('/drones/create', async (req, res, next) => {
  const drone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }
  //res.send(req.body)
  try {
    const newDrone = await Drone.create(drone)
    //I don't know if this condition is correct or not
    // if (!newDrone) {
    //   const allDrones = await Drone.find()
    //   res.render('drones/create-form', allDrones)
    // }
    res.redirect('/drones')
  } catch (error) {
    next(error)
  }
})

// Iteration #4: Update the drone
router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const droneId = await Drone.findById(req.params.id)
    res.render('drones/update-form', { droneId })
  } catch (error) {
    next(error)
  }
})

// Iteration #4: Update the drone
router.post('/drones/:id/edit', async (req, res, next) => {
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    //I don't know if this condition is correct or not
    // if (!updatedDrone || req.body === '') {
    //   const droneId = await Drone.findById(req.params.id)
    //   res.render('drones/update-form', { droneId })
    // }
    res.redirect('/drones')
  } catch (error) {
    next(error)
  }
})

// Iteration #5: Delete the drone
router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    await Drone.findByIdAndDelete(req.params.id)
    res.redirect('/drones')
  } catch (error) {
    next(error)
  }
})

module.exports = router
