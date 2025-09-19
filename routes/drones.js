const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here 

router.get('/drones', (req, res, next) => {

  Drone.find()
    .then(dronesFromDB => {
      res.render('drones/list', {drones: dronesFromDB})
    })
    .catch(error => console.log("Problema para encontrar los drones", error))
});

router.get('/drones/create', (req, res, next) => {
   res.render('drones/create-form')});


router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then((dronecreateFromDB) => {
      console.log("creado con exito", dronecreateFromDB)
      res.redirect(303, '/drones')
    })
    .catch(error => console.log("Error creando el dron", error))
});

router.get('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params;

  Drone.findOne({_id: id})
    .then(droneFromDb => 
      res.render('drones/update-form', {drone: droneFromDb})
    )
    .catch(error => console.log("Error editando el dron", error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  //.updateOne({filtro}, {actualizacion})
  Drone.updateOne({_id: id}, {$set: { name, propellers, maxSpeed }})
    .then(() => res.redirect(303, '/drones'))
  
    .catch(error => console.log("Error editando el dron", error))

});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Drone.deleteOne({_id: id})
    .then(() => {
      console.log("dron eliminado")
      res.redirect('/drones')
    })
    .catch((error) => console.log('error al borrar el dron', error ))

  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
