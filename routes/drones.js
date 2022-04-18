const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');


router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const droneList = await Drone.find().sort({name:1});
    res.render('drones/list.hbs', { drones : droneList });
  } catch (err){
    res.status(500).json({message: err.message});
  }
  // Drone.find()
  //   .then(dbResponse => {
  //     console.log('Retrieved drones from DB:', dbResponse);
  //     res.render('drones/list.hbs', { drones : dbResponse });
  // })
  // .catch(error => {
  //   console.log('Error while getting the drones from the DB: ', error);
  //   next(error);
  // });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');

});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed  } = req.body;
  try{
    const newDrone = await Drone.create({name,propellers,maxSpeed});
  }catch (err){
    console.log("Error occured creating new drone ",err);
    res.status(500).json({message: err.message});
  }
  res.redirect('/drones')

});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  try{
    const getDrone = await Drone.findById(id);
    res.render('drones/update-form.hbs', { drone : getDrone });
  }catch(err){
    console.log("Failed to load edit page ",err);
    res.status(500).json({message: err.message});    
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  const { name, propellers, maxSpeed  } = req.body;
  try{
    const newDrone = await Drone.findByIdAndUpdate(id,{name,propellers,maxSpeed});
  }catch (err){
    console.log(`Error occured updating drone [${id}] `,err);
    res.redirect(`/drones/${id}/edit`)    
  }
  res.redirect('/drones')
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;
  try{
    const newDrone = await Drone.findByIdAndDelete(id);
  }catch (err){
    console.log(`Error occured deleting drone [${id}] `,err);
  }
  res.redirect('/drones')
});

module.exports = router;

