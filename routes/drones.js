const express = require('express');
const router = express.Router();

const droneModel = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
   droneModel.find()
  .then((drones) => {
    res.render('drones/list.hbs', {drones})
  })
  .catch(() => {
      next('Cannot list drones')
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  droneModel.create({name, propellers, maxSpeed})
        .then(() => {
          res.redirect('/drones')
        })
        .catch(() => {
          next('Did not receive drone info')
        })
});

router.get('/drones/:id/edit', (req, res, next) => {
  let dynamicDroneId = req.params.id

  droneModel.findById(dynamicDroneId)
    .then((drone) => {

        res.render('drones/update-form.hbs', {drone})
    })
    .catch(() => {
        next('Cannot find drone')
    })
});




router.post('/drones/:id/edit', (req, res, next) => {
  let dynamicDroneId = req.params.id
  const {name, propellers, maxSpeed} = req.body

  droneModel.findByIdAndUpdate(dynamicDroneId, {name, propellers, maxSpeed})
    .then(() => {
        res.redirect('/drones')
    })
    .catch(() => {
        next('Edit failed')
    })
});


router.post('/drones/:id/delete', (req, res, next) => {
  let dynamicDroneId = req.params.id

  droneModel.findByIdAndDelete(dynamicDroneId)
    .then(() => {
        res.redirect('/drones') 
    })
    .catch(() => {
        next('Deleting specific todo failed')
    })
});

module.exports = router;
