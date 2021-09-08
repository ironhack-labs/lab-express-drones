const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res,) => {
  Drone.find()
  .then(dronesFromDb =>{
    res.render('./drones/list.hbs',{dronesFromDb})
  })
  .catch(error =>{
    console.log("ha ocurrido un problema obteniendo la lista de drones de la bd",error)
  })
  
});

router.get('/drones/create', (req, res, next) => {
    res.render('./drones/create-form.hbs')
});

router.post('/drones/create', (req, res) => {
  const name = req.body.name
  const propellers = req.body.propellers
  const maxSpeed = req.body.maxSpeed

  Drone.create({name,propellers,maxSpeed})
  .then(()=>{
    res.redirect('/drones')
  })
  .catch((error)=>console.log("error al crear dron",error))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const{id} =req.params
  Drone.findById(id)
  .then((dronesFromDb )=>{
    res.render('drones/update-form.hbs',dronesFromDb )
  });
});

router.post('/drones/:id/edit', (req, res) => {
  const { id } = req.params;
	const { name, propellers, maxSpeed } = req.body;

	Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
		.then((freshDrone) => res.redirect(`/drones`))
});


router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
 
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
