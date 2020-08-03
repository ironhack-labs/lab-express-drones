const express = require('express');

// require the Drone model here
const DroneModel = require('../models/Drone.model')

const router = express.Router();





router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  
   DroneModel.find()
        .then((drones) => {
            console.log(drones)
            res.render('../views/drones/list.hbs',{drones});
        })

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('../views/drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body)
    DroneModel.create(req.body)
        .then(() => {
            res.render('../views/drones/create-form.hbs', {successDrone: true})
        })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(req.params.id)
  DroneModel.findById(req.params.id)
      .then((drone) => {
          console.log(drone)
          res.render('../views/drones/update-form.hbs', {drone})
      })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let {name, propellers, maxSpeed} = req.body
  let droneId = req.params.id
    DroneModel.findByIdAndUpdate(droneId, {$set: {name, propellers, maxSpeed}})
        .then(() => {
          console.log('edited')
            res.redirect('/drones')
        })
        .catch ((error) => {
          console.log(error)
          res.render('../views/drones/create-form.hbs')
        })
});


router.post('/drones/:id/delete', (req, res, next) => {  //Find the /drones/:id/delete POST route in routes/drones.js and using .findByIdAndDelete() (or .findByIdAndRemove()), destroy the document with the given ID from the database.
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log("Drone deleted")
    res.redirect('/drones')
  })
  .catch((err) => console.log('Nothing was deleted' , err))
});


module.exports = router;
