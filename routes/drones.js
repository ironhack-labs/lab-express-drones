const express = require('express');

// require the Drone model here
const Drones = require("../models/drone.models")
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drones.find({})
  .then((drone) => {
    res.status(200).render('drones/list', {drone});
  }).catch((err) => {
    console.error("error loading celebs")
    next(err);
  })
});


router.get('/drones/create', (req, res, next) => {
  res.status(200).render('drones/create-form')
})
 

router.post('/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
   Drones.create({name, propellers, maxSpeed})
   .then(() => {
    res.redirect('drones')
   })
   .catch((err) => {
     console.error("error making drone");
     next(err);
   })
 });

router.get('/drones/:id/edit', (req, res, next) => {
      const {id} = req.params;
      Drones.findById(id)
      .then((drone) => {
        res.status(200).render('drones/update-form', {drone})
      })
      .catch((err) => {
        console.error("error making drone");
        next(err);
      })
 
 });


router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const {name, propellers, maxSpeed} = req.body;
  Drones.findByIdAndUpdate(id, {name, propellers, maxSpeed}, { new:true })
    .then(() => {
      res.redirect('../drones')
    })
    .catch((err) => {
      console.error("error updating drone");
      next(err);
    })
});


router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Drones.findByIdAndDelete(id)
  .then(() => {
    res.redirect('../drones')
   })
    .catch(error => next(error));
});

module.exports = router;



