const express = require('express');
const router = express.Router();


// require the Drone model here
const DroneModel = require('../models/Drone.model')


router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      res.render('../views/drones/list.hbs', {drones})
    })
    .catch(() => {
      console.log('Drones did not display. Something went wrong.')
    })
});

router.get('/drones/create', (req, res, next) => {
  
  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  DroneModel.create(req.body)
  .then(() => {
    res.redirect('/drones')
  })
  .catch((err) => {
    console.log(err)
    res.redirect('/drones/create')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  
  DroneModel.findById(req.params.id)
    .then((drone) => {
      res.render('../views/drones/update-form.hbs', {drone})
    })

});

router.post('/drones/:id/edit', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  console.log(req.params.id)
  DroneModel.findByIdAndUpdate(req.params.id, {$set: {name, propellers, maxSpeed}})
    .then((drone) => {
      console.log(drone)
      res.redirect('/drones')
    })
    .catch(() => res.redirect(`/drones/${req.params.id}/edit`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/drones')
    })
});


module.exports = router;
