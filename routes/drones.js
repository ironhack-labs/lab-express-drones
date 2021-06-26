const express = require('express');
const router = express.Router();

const DroneModel = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  DroneModel.find() 
    .then((droneData)=>{
      res.render('drones/list.hbs', {droneData})
    })
    .catch(() => {
      next('Error loading drones from database after request to: "/drones"')
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.create({ name, propellers, maxSpeed})
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      next('Unable to create a drone from post request: "/drones/create"');
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id;
  DroneModel.findById(droneId)
  .then((droneEditData) => { 
    res.render("drones/update-form.hbs", {droneEditData})
  })
  .catch(() => {
    next('Update has failed');
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  const droneId = req.params.id;
  DroneModel.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true})
  .then(() => {
    res.redirect('/drones')
  })
  .catch((droneEditData) => {
    res.render('drones/update-form.hbs', {droneEditData});
  })
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
  // const droneId = req.params.id;

  DroneModel.findByIdAndRemove(id)
    .then(()=>{
      res.redirect('/drones')
    })
    .catch(() => {
      next('Failed to delete the data. from: "/drones/:id/delete"')
    })
});

module.exports = router;
