const express = require('express');
const router = express.Router();

// require the Drone model here

const DroneModel = require ('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel
    .find()
    .then(drones => res.render ('drones/list',{ drones}))
    .catch(err => console.log (err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body

  DroneModel
    .create ({name, propellers, maxSpeed})
    .then (()=> res.redirect ('/drones'))
    .catch(err => console.log (err))

});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params

  DroneModel

    .findById(id)
    .then(drones=> res.render('drones/update-form', drones))
    .catch(err => console.log (err))

});

router.post('/drones/:id/edit', (req, res, next) => {


  // Iteration #4: Update the drone
  const {id} = req.params
  const { name, propellers, maxSpeed } = req.body
  


  DroneModel
    .findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true})
    .then(() => res.redirect('/drones'))
    .catch(err => console.log (err))
    
});



router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id}= req.params


  DroneModel
    .findByIdAndDelete (id)
    .then (()=> res.redirect('/drones'))
    .then(err=> console.log(err))
}); 

module.exports = router;
