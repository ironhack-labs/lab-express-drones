const express = require('express');
const { findById } = require('../models/Drone');

// require the Drone model here
const Drone = require(`../models/Drone`)

const router = express.Router();

router.get('/drones', (req, res, next) => {
Drone.find()
.then((result) => {
res.render(`drones/list`, {drones:result})
}).catch((err) => {
console.log(err);

});
});

router.get('/drones/create', (req, res, next) => {
  res.render(`drones/create-form`)
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
  .then((result) => {
    console.log(result)
    res.redirect('/drones')
  }).catch((err) => {
    console.log(err);
    res.redirect('/drones/create')
    
  });
});

router.get('/drones/:_id/edit', (req, res, next) => {
Drone.findById(req.params)
.then((result) => {
  console.log(result);
  res.render(`drones/update-form`, result)
})
.catch((err) => {
  console.log(err);
  
});
});

router.post('/drones/:_id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params, req.body)
  .then((result) => {
    console.log(req.body);
    res.redirect(`/drones`)
    
  }).catch((err) => {
    console.log(err);
    res.redirect(`/drones/:_id/edit`)
  });
});

router.post('/drones/:_id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params)
  .then((result) => {
    console.log(result);
    res.redirect(`/drones`)
    
  }).catch((err) => {
    console.log(err);
    res.redirect(`/drones/:_id/edit`)
  });
});

module.exports = router;
