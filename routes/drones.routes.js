const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/', (req, res, next) => {
  DroneModel.find()
    .then((allDrones) => {
      res.render('drones/list', { allDrones });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.create({ name, propellers, maxSpeed })
    .then((createdDrones) => {
      console.log(`Drones created: ${createdDrones}`)
      res.redirect('/drones')})
    .catch(() => res.render('drones/create-form')); 
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;

  DroneModel.findById(id)
    .then((droneById) => {
      res.render('drones/update-form', {droneById})
    })
    .catch(err => {console.log(err)})

});


router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.findByIdAndUpdate(id , { name, propellers, maxSpeed } , { new : true})
    .then(() => {
      res.redirect('/drones')
    })
    .catch(()=> {
      res.render('drones/update-form')
    })
});


router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  
  DroneModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones")
    })  
    .catch(err => {console.log(err)})
});

module.exports = router;
