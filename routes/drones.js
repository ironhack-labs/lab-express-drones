const express = require('express');
const droneModel = require("./../models/Drone.model")

// require the Drone model here

const router = express.Router();

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await droneModel.find()
    res.render('drones/list', {drones, isDronePage: true})
  } catch(err)  {
    console.log(err)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    await droneModel.create(req.body)
    res.redirect("/drones")
  } catch(err) {
    console.log(err)
    res.redirect("/drones/create")
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const {name, propellers, maxSpeed} = await droneModel.findById(req.params.id)
    console.log({name, propellers, maxSpeed})
    res.render('drones/update-form', {name, propellers, maxSpeed, id: req.params.id});
  } catch (err) {
    console.log(err)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try  {
    await droneModel.findByIdAndUpdate(req.params.id, req.body) ;
    res.redirect("/drones")
  } catch(err) {
    console.log(err) ;
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await droneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones") ;
  } catch (err) {
    console.log(error) ;
  }
});

module.exports = router;
