const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  DroneModel.find()
  .then(drones =>{
    res.render("drones/list.hbs",{drones})
  })
  .catch(error=>{
    console.log("Error",error)
})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
res.render("drones/create-form.hbs")

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code 


  DroneModel.create(req.body)
  .then(drone=>{
    console.log("Que es el drone",drone)
    res.render("drones/list",drone)
  })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  DroneModel.findById(id)
  .then(drone=>{
    res.render("drones/update-form.hbs",drone)
  })
  .catch(error =>{
    console.log("El error",error)
    next()
  })
  
});


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  DroneModel.findByIdAndUpdate(id,{...req.body},{new:true})
  .then(updateDrone =>{

    console.log("el nuevo dog",updateDrone)
    res.render("drones/list",{...updateDrone, isEdit:true})
  })
  .catch(error =>{
    console.log("El error",error)
    next()
  })

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const {id}= req.params

   DroneModel.findByIdAndDelete(id)
  .then(()=>{
    res.render("drones/list",{isDelete:true})

  })
  .catch(error =>{
    console.log("El error",error)

  })

});

module.exports = router;
