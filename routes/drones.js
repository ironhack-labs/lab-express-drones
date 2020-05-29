const express = require('express');

// require the Drone model here

const router = express.Router();
let DronesModel = require('../models/drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DronesModel.find()
    .then((drone)=>{res.render('../views/drones/list.hbs', {drone})})
    .catch(()=>{console.log('Something went wrong')})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render(('../views/drones/create-form.hbs'))
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;

  DronesModel.create({name: name, propellers: propellers, maxSpeed: maxSpeed})
        .then(()=>{
            res.redirect('/drones')
        })
        .catch(()=>{
            res.render('../views/drones/create-form.hbs')
        })
})

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router