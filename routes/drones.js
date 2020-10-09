const express = require('express');

const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  DroneModel.find()
  .then((drones) => {
    res.render('drones/list.hbs', {drones})
  })
  .catch((err) => {
    res.render('error.hbs')
    console.log('oh no!', err)
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  DroneModel.create(req.body)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      res.render('drones/create-form.hbs')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
let id = req.params.id
  DroneModel.findById(id)
    .then((drone) => {
      res.render('drones/update-form.hbs', {drone})
    })
    .catch(() => {
      res.render('error.hbs')
    console.log('oh no!', err)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
 let id = req.params.id
 DroneModel.findByIdAndUpdate(id, {$set: req.body})
  .then(() => {
    res.redirect('/drones')
  })
  .catch((err) => {
    res.redirect(`/drones/${id}/edit`)
    console.log(err)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  let id = req.params.id
  DroneModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
});

module.exports = router;
