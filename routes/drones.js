const express = require('express');



// require the Drone model here
const Drone = require('../models/Drone.model.js');

const router = express.Router();

router.get('/drones', (req, res,next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(allTheDrones => {
    //console.log(allTheDrones)
    res.render('drones/list',{drones:allTheDrones})
  })
  .catch(err=>console.log(err));

});

router.get('/drones/create', (req, res,next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form');

});

router.post('/drones/create', (req, res,next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body);
  const {name,propellers, maxSpeed} = req.body

  Drone.create({name,propellers,maxSpeed})
  .then(()=> res.redirect('/drones'))
  .catch(err=>console.log(err));
});

router.get('/drones/:id/edit', (req, res,next) => {
  // Iteration #4: Update the drone
  // ... your code here
  //const {id} = req.params;
  Drone.findById()
  .then(droneToEdit => {
    res.render('drones/update-form',droneToEdit)
  })
  .catch(err=> console.log(err));
});

router.post('/drones/:id/edit', (req, res,next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const{name, propellers,maxSpeed} = req.body

  Drone.findByIdAndUpdate({_id:req.params.id},{name,propellers,maxSpeed})
  .then(()=> {
    res.redirect('/drones')
  })
  .catch(err=>console.log(err));


});

router.post('/drones/:id/delete', (req, res,next) => {
  // Iteration #5: Delete the drone
  // ... your code here
 

  Drone.findByIdAndDelete({_id:req.params.id})
  .then(()=>{
    res.redirect('/drones')
  })
  .catch(err=>console.log(err));
});

module.exports = router;
