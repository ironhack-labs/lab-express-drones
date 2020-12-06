const express = require('express');

// require the Drone model here
const Drones = require('../models/dron')

const router = express.Router();

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  const drones = await Drones.find()
  console.log("Drones:", drones)
  res.render("drones", {drones})
});

router.get('/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
  res.render("create-form")
  } catch (err) {
    res.send(err)
  }
});

router.post('/drones/create', async(req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const dronForm = req.body
    console.log("Dron form: ", dronForm)
    await Drones.create(dronForm)
    res.redirect("/drones")
  } catch (err) {
    res.send(err)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const dronId = req.params.id
  console.log("DronId:", dronId)
  const dron = await Drones.findById(dronId)
  console.log("Dron:", dron)
  res.render('update-form', dron)
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const dronId = req.params.id
    console.log("dronId", dronId)
    const updatedDronInfo = req.body
    console.log("Updated Dron Info:", updatedDronInfo)
    const updatedDron = await Drones.findByIdAndUpdate(dronId, updatedDronInfo, {new: true})
    res.render('update-form', updatedDron)
  } catch (err) {
    res.send(err)
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const dronId = req.params.id
    const deleteDron = await Drones.findByIdAndRemove(dronId)
    res.redirect('/drones')
  } catch (err) {
    res.send(err)
  }
});

module.exports = router;