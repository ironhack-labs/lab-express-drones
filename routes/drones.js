const express = require('express');
const { redirect, format } = require('express/lib/response');
const { findByIdAndDelete } = require('../models/Drone.model.js');
const router = express.Router();

const Dron = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  Dron
  .find()
  .then(drones => res.render('drones/list',{drones}))
  .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  Dron
  .create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(err => console.log(err))
});

router.get('/drones/:drones_id/edit', (req, res, next) => {
  const { drones_id } = req.params
  console.log(drones_id)
  console.log(req.params)
  
  Dron
  .findByIdAndUpdate(drones_id)
  .then(dron => res.render('drones/update-form', dron))
  .catch(err => console.log(err))
});

router.post('/drones/:drones_id/edit', (req, res, next) => {
  const { drones_id } = req.params
  const { name, propellers, maxSpeed } = req.body
  console.log(drones_id)
  console.log(req.body)
  Dron
  .findByIdAndUpdate(drones_id, { name, propellers, maxSpeed }, { new: true })
  .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

router.post('/drones/:drones_id/delete', (req, res, next) => {
  const { drones_id } = req.params
  
  Dron
  .findByIdAndDelete(drones_id)
  .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

module.exports = router;
