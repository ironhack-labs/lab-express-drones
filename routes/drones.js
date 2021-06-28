const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');



  // Iteration #2: List the drones
router.get('/', (req, res, next) => {
  Drone.find()
  .then((results) => {
    console.log(results)
    res.render("./drones/list" , {results})
  })
  .catch((err) => console.log("There is an error in it2: ", err) )
});




  // Iteration #3: Add a new drone
router.get('/create', (req, res, next) => {
  res.render("./drones/create-form")
});



router.post('/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone.create( { name, propellers, maxSpeed } )
  .then((newDrone) => {
    console.log(newDrone);
    res.redirect('/drones'); 
  })
  .catch((err) => {
    console.log("There is an error in it3: ", err)
    res.redirect('/drones/create');
  })
});




  // Iteration #4: Update the drone
router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id
  
  Drone.findById(id)
    .then( droneFound => res.render("./drones/update-form" , droneFound))
  	.catch(err=> console.log(err))
});





router.post('/:id/edit', (req, res, next) => {

  const id = req.params.id;
  const { name, propellers, maxSpeed } = req.body
  
  Drone.findByIdAndUpdate(id , { name, propellers, maxSpeed })
  .then( updatedDrone => {
    console.log(updatedDrone);
    res.redirect('/drones'); 
  })
  .catch((err) => {
    console.log("There is an error in it4: ", err)
    res.redirect(`/${id}/edit`);
  })
});





  // Iteration #5: Delete the drone
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  
  Drone.findByIdAndDelete(id)
  .then(deletedDrone => {
    console.log("This is the deleted drone: " , deletedDrone);
    res.redirect('/drones'); 
  })
  .catch((err) => {
    console.log("There is an error in it5: ", err)
    res.redirect("/drones");
  })
});



module.exports = router;
