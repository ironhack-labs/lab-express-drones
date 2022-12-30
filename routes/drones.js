const express = require('express');
const router = express.Router();
const Drones = require("../models/Drone.model.js")
const mongoose = require("mongoose");
//the Drone model here

router.get('/drones',(req, res, next) => {
   Drones.find({}, function(error,drones){
      if (error) return console.log(error)
     // console.log(data)
      res.render("drones/list", {drones})

    })
});

router.get('/drones/create', (req, res, next) => {
    res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const newDrone = req.body;
  Drones.create(newDrone)
  .then(() => res.redirect('/drones'))
  .catch(error => next(error));

});

router.get('/drones/:droneId/edit', (req, res, next) => {
  const {droneId} = req.params
 Drones.findById(droneId)
    .then(droneToEdit => {
      res.render('drones/update-form.hbs', { drone: droneToEdit });
    })
    .catch(error => next(error));
});


router.post('/drones/:id/edit', (req, res, next) => {
  const editedDrone = req.body;

  Drones.findByIdAndUpdate(req.params.id, editedDrone, { new: true })
    .then(() => res.redirect(`/drones`)) 
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {

  Drones.findByIdAndDelete(req.params.id)
    .then(() => res.redirect(`/drones`)) 
    .catch(error => next(error));
});


module.exports = router;


