const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then(data=>{
        console.log('data',data)
        res.render('drones/list',{drones: data})
    })
    .catch(error => {
        console.log('Error',error)
        next(error);
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.find()
    .then(data=>{
        console.log('data',data)
        res.render('drones/create-form',{drones: data})
    })
    .catch(error => {
        console.log('Error',error)
        next(error);
    })
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
  .then(drone => {
    console.log('que se creo',drone);
    res.render('drones/success',drone)
  })
  .catch(error => {
    console.log('Error',error)
    next(error);
  })
});

router.get('/drones/edit/:_id', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {_id} = req.params
  Drone.findById(_id)
  .then(drone => {
    res.render('drones/update-form',drone)
  })
  .catch(error => {
    console.log('Error',error)
    next(error);
  })
});

router.post('/drones/edit/:_id', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {_id} = req.params
  const {name,propellers,maxSpeed} = req.body
  Drone.findByIdAndUpdate(_id,{name,propellers,maxSpeed},{new:true}) //me va a regrar un unico elemento {}
    .then(updatedDrone=>{
        console.log("el nuevo Dron",updatedDrone)
                                //tenemos que convertir de bson a object JS la respuesta del metodo de mongoose
                                //para poder utilizar los motodos de los objetos
        res.redirect("/drones")
    })
    .catch(error=>{
        console.log("el error",error)
        next()
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params
    Drone.findByIdAndDelete(id)
    .then(()=>{
      /* res.render("drones/success",{isDelete:true}) */
      res.redirect('/drones')
    })
    .catch(error=>{
        console.log("error",error)
        next()
    })
});

module.exports = router;
