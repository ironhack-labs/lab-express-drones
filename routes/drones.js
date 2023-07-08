const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((drone) => {
    res.render('drones/drones-list', { drone })
  })
  .catch((err) => {
    console.log(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/form')
});

router.post('/drones', (req, res, next) => {
  Drone.create(req.body)
  .then((createdDrone) => {
    res.redirect('/drones')
    console.log(`The drone ${createdDrone.name} has been created`)
  })
  .catch((err) => {
    res.render('/drones/create')
    console.log(err)
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id

  Drone.findById(id)
  .then((drone) => {
    res.render('drones/form', { drone, isEdit: true })
  })
  .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id

  Drone.findByIdAndUpdate(id, req.body, { new: true })
  .then((drone) => {
    res.redirect(`/drones`)
  })
  .catch(err => {
    console.error(err)
    res.render(`/drones/${id}/edit`)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  const id = req.params.id

  Drone.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(err => console.error(err))
});

module.exports = router;
