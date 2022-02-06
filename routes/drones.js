const express = require('express');
const router = express.Router();
const Drones = require('./../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {                                                               
  Drones                                                             // Iteration #2: List the drones
    .find()
    //.then(allTheDronesFromDB => console.log(allTheDronesFromDB))
    .then(drones => res.render('drones/list', {drones}))
    .catch(err => console.log("oops",err))  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  
  res.render('drones/create-form')
});


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  
  const {name, propellers,maxSpeed } = req.body
  //console.log(req.body)

  Drones
    .create(req.body)
    .then(() => res.redirect('/drones'))
    .catch(err => res.redirect('/drones/create'))

})


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
  const {id}= req.params

  Drones
    .findById(id)
    .then(drones => res.render('drones/update-form', drones))
    .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drones
    .findByIdAndUpdate(req.params, req.body)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
    
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone

  const { id } = req.params
  Drones
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

module.exports = router;
