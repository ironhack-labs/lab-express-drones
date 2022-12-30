const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model")


router.get("/drones", (req, res, next) => {
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
    res.render("drones/create-form")
 
});

router.post('/drones/create', (req, res, next) => {
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
  Drone.findById(req.params.id)
  .then(droneObject=>{
    
    res.render("drones/update-form",droneObject)
  })
  .catch(err=>{
    console.log(`something happened ....${err}`)
    next()
  })
});

router.post("/drones/:id/edit", (req, res, next) => {
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
  Drone.findByIdAndRemove(req.params.id)
    .then(()=>{
      console.log(`drone deleted from the DB`)
      res.redirect("/drones")

    })
    .catch((err) => {
      console.log(`something happened ....${err}`);
      next()
    });

  // ... your code here
});

module.exports = router;
