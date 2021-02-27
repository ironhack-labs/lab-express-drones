const express = require('express');
const DroneModel= require('../models/drone')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find()
  .then((dronesDocument)=>res.render('drones/list.hbs', {drones : dronesDocument}))
  .catch(next)
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed}=req.body
  DroneModel.create({name, propellers, maxSpeed})
  .then(()=> res.redirect('/drones'))
  .catch(next)
});

router.get('/drones/:id/edit', (req, res, next) => {
  DroneModel.findById(req.params.id)
  .then((droneDocument)=>res.render('drones/update-form.hbs', {drone: droneDocument}))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {name, propellers, maxSpeed}=req.body
  DroneModel.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed})
  .then(()=> res.redirect('/drones'))
  .catch(next)
});

router.post('/drones/:id/delete', (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
  .then(()=>res.redirect('/drones'))
  .catch(next)
});

module.exports = router;

