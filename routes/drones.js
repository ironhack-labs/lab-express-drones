const express = require('express');
const Drone = require('../models/Drone.model')
// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  //Iteration #2
  Drone.find({})
    .then((drone)=>{
      res.render('drones/list', {drone: drone})
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed} = req.body

  Drone.create({name, propellers, maxSpeed})
    .then(droneFromDB => console.log(`New drone created: ${droneFromDB.name}.`))
    .then(() => res.redirect("/drones"))
    .catch((e) => next(e));
})

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then(droneToEdit =>{
      //console.log(droneToEdit)
      res.render('drones/update-form', droneToEdit)
    })
    .catch(e => console.error(`Error while getting a single book for edit: `, e))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed},{new:true})
    .then(() => res.redirect("/drones"))
    .catch(error =>
      console.log(`Error while updating a single book: ${error}`)
    );

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then((d) =>{
      console.log(`Drone ${d.name} has been eliminated`)
      res.redirect('/drones')
    })
    .catch(
      error =>
        console.log(`Error while deleting a single book: ${error}`)
    )
});

module.exports = router;
