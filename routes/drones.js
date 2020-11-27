const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model');

const router = express.Router();

//DISPLAY all the drones
router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((drones) => {
      console.log(drones)
      res.render("drones/list", {drones})

    })
    .catch(err => {
      console.log(`Error: ${err}`)
    });
});

//ADD a new dron GET
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.findById(req.params.droneId)
      .then((newDrone) => {
        res.render ("drones/create-form", {newDrone})
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
});

//ADD a new dron POST
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
   Drone.create(req.body)
      .then (() => {
        res.redirect("/drones")
      })  
      .catch((err) => {
        console.log(`Error: ${err}`)
      }) 
});

//EDIT a drone GET
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    Drone.findById (req.params.id)
      .then((drone) => {
        res.render("drones/update-form", drone)
      })
      .catch((err) => {
        console.log(`Error ${err}`)
      })
});

//EDIT a drone POST
router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    Drone.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(()=>{
        res.redirect("/drones")
      })
      .catch((err) => {
        console.log(`Error ${err}`)
      })
});


//DELETE a drone
router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then( () => {
      res.redirect("/drones")
    })
    .catch((err) => {
      console.log(`Error ${err}`)
    })
});

module.exports = router;
