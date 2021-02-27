const express = require('express');
const router = express.Router();
const Drone = require("./../models/Drone.model")

// require the Drone model here


router.get('/drones', (req, res, next) => 
  // Iteration #2: List the drones
  Drone.find()
  .then((drones) => res.render("drones/list", {list : drones}))
  .catch((dbError) => {console.log(dbError)})
);
  


router.get('/drones/create', (req, res, next) => res.render("drones/create-form"))
  // Iteration #3: Add a new drone


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellors, maxSpeed }= req.body;
  Drone.create({
    name,
    propellors,
    maxSpeed
  })
  .then(res.redirect("/drones"))
  .catch((err) => next(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then((drone) => {res.render("drones/update-form", {item : drone})})
  .catch((err)=>{next(err)})

});


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {name, propellors, maxSpeed }= req.body;
  console.log(req.body)
  Drone.findByIdAndUpdate( req.params.id ,{
    name,
    propellors,
    maxSpeed
  })
  .then(res.redirect("/drones"))
  .catch(err => console.log(err))

  
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  console.log("param >>",req.params.id)
  console.log("body >>",req.body)
  Drone.findByIdAndDelete(req.params.id)
  .then(res.redirect("/drones"))
  .catch(err => console.log(err))

});

module.exports = router;
