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

router.post('/drones/:id/edit', async (req, res, next) => {
  const { droneId } = req.params
  const {name, propellers, maxSpeed} = req.body

  try{
    await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, { new: true })
    console.log(data.name, 'has been edited')
    res.redirect('/drones')
  }
  catch(err){
    console.log("Couldn't edit", err)
    res.redirect('/drones')
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  const { droneId } = req.params

  try{
    await Drone.deleteOne(droneId)
    console.log("Drone deleted")
    res.redirect('/drones')
  }
  catch{
    console.log("Failed to delete drone")
    res.redirect('/drones')
  }

});

module.exports = router;
