const express = require('express');

const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones/', (req, res, next) => {
  Drone.find().then((allDronesFromDb) => {
    res.render('drones/list', {myDrones :allDronesFromDb});
  })
  .catch(error => console.log("Error while getting the drones from the DB: ", error));
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  Drone.create({name: req.body.name, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed})
  .then(()=>{res.redirect('/drones')
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then((drone)=>{res.render('drones/update-form', drone)
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, {name: req.body.name, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed})
  .then(()=>{res.redirect('/drones') 
  });
});

router.post('/drones/:id/', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then(()=>{res.redirect('/drones') 
  });
});
module.exports = router;