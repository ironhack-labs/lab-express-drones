const express = require('express');

let DroneModel = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
    .then((drones)=>{
      res.render('drones/list.hbs',{drones})
    })
    .catch(console.log('Not able to find drones'))

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name,propellers,maxSpeed} = req.body;
  DroneModel.create({name,propellers,maxSpeed})
    .then((response)=>{
      res.redirect('/drones')
    })
    .catch(()=>{
      res.render(err)  
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  DroneModel.findById(req.params.id)
    .then((results)=>{
      res.render('drones/update-form.hbs',results)
    })
    .catch(()=>{
      res.send(err)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {name,propellers,maxSpeed} = req.body
  DroneModel.findByIdAndUpdate(req.params.id,{name,propellers,maxSpeed})
    .then(()=>{
      res.redirect('/drones')
    })
    .catch(()=>{
      res.render('/drones/:id/edit')
    })
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  DroneModel.findByIdAndDelete(req.params.id)
  .then( (results) => {
    res.redirect('/drones')
    }
  )
  .catch( () => {
    res.send(err)
    }
  )

});

module.exports = router;
