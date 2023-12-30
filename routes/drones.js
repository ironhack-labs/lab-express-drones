const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  Drone
  .find()
  .then(drones =>{
    res.render('drones/list', {drones})
  })
  .catch(err =>{
    console.log(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  Drone
  .find()
  .then(data=>{
    res.render('drones/create-form', {data})
  })
  .catch(err =>{
    console.log(err)
  })
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  Drone
  .create({name, propellers, maxSpeed})
  .then(()=>{
    res.redirect('/drones')
  })
  .catch(err =>{
    console.error(err)
})
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  Drone
  .findById(id)
  .then(details=>{
    res.render('drones/update-form', {details})
  })
  .catch(err =>{
    console.error(err)
})
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body
  Drone
  .findByIdAndUpdate(id, { name, propellers, maxSpeed })
  .then(data=>{
    res.redirect('/drones')
  })
  .catch(err =>{
    console.error(err)
})
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params
  Drone
  .findByIdAndRemove(id)
  .then(()=>{
    res.redirect('/drones')
})
.catch(err =>{
    console.error(err)
})
});

module.exports = router;
