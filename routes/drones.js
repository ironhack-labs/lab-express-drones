const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  let data 
  try{
    data = await Drone.find()
  }
  catch(err){
    console.log('Failed serving drones from DB : ', errP)
  }

  res.render('drones/list', {
    drones: data
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  const data = req.body
  
  try{
    const exists = await Drone.find({name: data.name})
   
    if(exists.length !== 0) throw new Error("This drone already exists")

    await Drone.create(data)
    res.redirect('/drones')

    console.log('New drone added to DB', data.name)
  }
  catch(err){
    console.log("Couldn't add new drone to the DB", err)
    res.redirect('/drones/create')
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  const droneId = req.params.id

  try{
    const data = await Drone.find({_id: droneId})

    res.render('drones/update-form', {
      drone: data[0]
    })
  }
  catch(err){
    console.log("Can't update drone", err)
  }
 
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
