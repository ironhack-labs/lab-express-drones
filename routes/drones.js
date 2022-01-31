const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then(allDrones => {
      res.render('drones/list.hbs',{drones: allDrones})
    })
    .catch(err => console.log('Error while listing ' + err));
  
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.create({name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('Error while creating new Drone: ' + err));
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  
  DroneModel.findById(id)
    .then(droneToEdit => {
      res.render('drones/update-form.hbs',{drone: droneToEdit});
    })
    .catch(err => console.log('Error while fetching drone for update ' + err));
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.findByIdAndUpdate(id,{name, propellers, maxSpeed}, { new: true })
    .then(updateDrone => res.redirect('/drones'))
    .catch(err => console.log('Error while updating drone ' + err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params
  console.log(req.params);
  DroneModel.findByIdAndDelete(id)
    .then(() => {
      console.log('deleting ' + id);
      res.redirect('/drones')
    })
    .catch(err => console.log('Error while deleting drone ' + err));
});

module.exports = router;
