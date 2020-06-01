const express = require('express');

// require the Drone model here
let DronesModel = require('../models/drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DronesModel.find()
    .then((resultat)=>{res.render('../views/drones/list.hbs', {resultat})})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers,maxSpeed} = req.body;
  DronesModel.create({name:name,propellers:propellers, maxSpeed:maxSpeed})
    .then(()=> {
    res.redirect('/drones')
    })
    .catch(()=> {
    res.render('../views/drones/create-form.hbs')
    })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  DronesModel.findById(req.params.id)
  .then((response)=> {
    res.render('../views/drones/update-form.hbs',{response})
    })
    .catch(()=> {
    res.send('Oups!Not working!')
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id
  const {name, propellers, maxSpeed} = req.body;
  DronesModel.findByIdAndUpdate(id, {$set: {name: name, propellers: propellers,maxSpeed:maxSpeed }})
  .then((todo) => {
       res.redirect('/drones')
  })
  .catch((response) => {
       res.render('../views/drones/update-form.hbs',{response})
  })

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  let id = req.params.id
  const {name, propellers, maxSpeed} = req.body;
  DronesModel.findByIdAndDelete()(id, {$set: {name: name, propellers: propellers,maxSpeed:maxSpeed }})
  .then((todo) => {
       res.redirect('/drones')
  })
  .catch((response) => {
       res.render('../views/drones/update-form.hbs',{response})
  })
});

module.exports = router;
