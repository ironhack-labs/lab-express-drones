const express = require('express')

// require the Drone model here
const Drone = require('../models/Drone.model')

const router = express.Router()

router.get('/drones', (req, res, next) => {
  Drone.find({})
  .then((result)=>{
    res.render('drones/list', {drones: result})
  })
  .catch((error)=>{
    console.log(error)
  })
})

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
})

router.post('/drones/create', (req, res, next) => {
    Drone.create(req.body)
      .then((result)=>{
        res.redirect('/drones')
      })
      .catch((error)=>{
        if (error) res.render('drones/create-form')
      })
})

router.get('/drones/:_id/edit', (req, res, next) => {
  Drone.findById(req.params._id)
  .then((result)=>{
    res.render('drones/update-form', result)
  })
  .catch((error)=>{
    res.redirect(`/drones/${req.params._id}/edit`)
  })
})

router.post('/drones/:_id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params._id, req.body)
    .then((result)=>{
      res.redirect('/drones')
    })
    .catch((error)=>{
    console.log(error)
    })
})

router.post('/drones/:_id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params._id)
    .then((result)=>{
      res.redirect('/drones')
    })
    .catch((error)=>{
    console.log(error)
    })
})

module.exports = router
