const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(data => {
    console.log("Data", data);
    res.render("drones/list",{
      "drones": data
    })
  }).catch(err => {
    console.log("Error", err);
    next(err)
  })

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name,propellers,maxSpeed} = req.body

  Drone.create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(err => {
    console.log('Error',err)
    res.send('err')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params

  Drone.findById(id)
  .then( dronUpdate => {
    res.render('drones/update-form.hbs', {drone: dronUpdate})
  }) .catch(err => {
    console.log('Error',err)
    res.send('err')
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const{id} = req.params
  const {name,propellers,maxspeed, ...rest} = req.body

  Drone.findByIdAndUpdate(id,{name, propellers, maxspeed})
  .then((drone) => res.render('drones/update-form.hbs', drone))
  .catch(err => {
    console.log('Error',err)
    res.send('err')
  })

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} =req.params

  Drone.findByIdAndDelete(id)
  .then(() => res.redirect('/drones'))
  .catch(err => {
    console.log('Error',err)
    res.send('err')
});
});
module.exports = router;
