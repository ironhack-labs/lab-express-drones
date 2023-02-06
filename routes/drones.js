const express = require('express');
const router = express.Router();
const users = require("./users.controllers");

// require the Drone model here
const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
    Drone.find()
      .then(listOfDrones => {
  
        res.render("drones/list",{listOfDrones})
      })
      .catch((err) => {
        console.log(`there has been an error  -----> ${err}`);
        next()
      });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = {
    name:req.body.name,
    propellers:req.body.propellers,
    maxSpeed:req.body.maxSpeed
  }
  Drone.create(newDrone)
  .then(response=>{
    console.log(`the drone was created in the DB`)
    res.redirect("/drones")
  })
  .catch(err=>{
    console.log(`something happened ....${err}`)

    res.render("drones/create-form",{err})
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then(droneObject=>{

    res.render("drones/update-form",droneObject)
  })
  .catch(err=>{
    console.log(`something happened ....${err}`)
    next()
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
    const { name, propellers, maxSpeed } = req.body;
    Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
      .then((droneObject) => {
        console.log(`the drone ${droneObject.name} has been updated`);
        res.redirect("/drones")
      })
      .catch((err) => {
        console.log(`something happened ....${err}`);
        next()
      });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndRemove(req.params.id)
  .then(()=>{
    console.log(`drone deleted from the DB`)
    res.redirect("/drones")

  })
  .catch((err) => {
    console.log(`something happened ....${err}`);
    next()
  });

});

router.get('/users/new', users.create)
router.post('/users', users.doCreate)

module.exports = router;
