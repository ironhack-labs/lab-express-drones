const express = require('express');
const router = express.Router();


// require the Drone model here

const Drone = require('../models/Drone.model');

router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find();
    res.render('drones/list', { drones})
  } catch (error) {
   console.log(error);
   next(error); 
  }
});

router.get('/drones/create', (req, res, next) =>{
  res.render('drones/create-form')

}); 

router.post('/drones/create', async (req, res, next) => {
 try {
   const {name, propellers, maxSpeed} = req.body;
   const createDrone = await Drone.create({name, propellers, maxSpeed});

   res.redirect('/drones')
 } catch (error) {
  console.log(error);
  next(error);
 }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const drone = await Drone.findById(req.params.id)
    res.render('drones/update-form', drone)

  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
 try {
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body;

  const updatedDrone = await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed});

  res.redirect('/drones');
 } catch (error) {
  console.log(error);
  next(error);
 }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    const {id} = req.params;
    await Drone.findByIdAndRemove(id);

    res.redirect('/drones');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
