const express = require('express');
const droneModel = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  droneModel.find()
    .then((drones) => res.render('drones/list.hbs', {drones}))
    .catch(() => console.log (`Cannot find the drone collection`))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  droneModel.create(req.body)
    .then(()=>res.redirect('../drones'))
    .catch(()=>res.render('drones/create-form.hbs', {error:true}))
});


router.get('/drones/:id/edit', (req, res, next) => {
  droneModel.findById(req.params.id)
    .then((drone)=> res.render('drones/update-form.hbs', {drone}))
    .catch(() => `Could not find the drone in the database`)
});

router.post('/drones/:id/edit', (req, res, next) => {
  let {name, propellers, maxSpeed} = req.body
  let droneId = req.params.id
  droneModel.findByIdAndUpdate(droneId, {$set: {name, propellers, maxSpeed}})
    .then(()=>res.redirect('../../drones'))
    .catch(()=>res.render('drones/update-form.hbs', {error:true}))
});


router.post('/drones/:id/delete', (req, res, next) => {
  let droneId = req.params.id
  droneModel.findByIdAndDelete(droneId)
    .then(()=> res.redirect('/drones'))
});

module.exports = router;
