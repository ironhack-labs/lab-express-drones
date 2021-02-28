const express = require('express');

const DroneModel = require("../models/Drone.model");

const router = express.Router();

//http://localhost:3000/drones/list
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones

  DroneModel.find()
    .then((dronesList) => {
      res.render("drones/list", {list : dronesList});
    })
    .catch((error) => {console.log(error)
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.create({name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch(error => {res.render('drones/create-form')});

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
  const {id} =req.params;

  DroneModel.findById(id)
  .then(droneToEdit =>{
    res.render('drones/update-form', {drone: droneToEdit});
  })
  .catch(error => next(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  console.log(req.body)

  DroneModel.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true})
  .then(updatedDrone => res.redirect('/drones'))
  .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;

  DroneModel.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
