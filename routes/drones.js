const express = require('express');
const router = express.Router();
const dronModel = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  dronModel.find()
  .then((found)=> {
    console.log(found)
    return found
  })
  .then((drones)=> res.render('../views/drones/list.hbs',{drones}))
  .catch((err)=> next(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // res.json(req.body)
  const {name, propellers, speed: maxSpeed } = req.body
  dronModel.create({name, propellers, maxSpeed})
  .then(() => {
    res.redirect('/drones')
  })
  .catch((err)=> next(err))

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(req.params);
  dronModel.findById(req.params.id)
  .then((dron) =>{
  res.render('drones/update-form', dron)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {name, propellers, maxSpeed} = req.body
  dronModel.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed})
  .then(() => res.redirect("/drones"))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  dronModel.findByIdAndDelete(req.params.id)
  .then(()=> res.redirect("/drones"))
});

module.exports = router;
