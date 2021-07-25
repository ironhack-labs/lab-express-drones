const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find(req.query)
  .then((droneDocuments)=> {
    res.render("drones/list.hbs", {
      drones: droneDocuments,
    })
  })
  .catch((error)=> {
    console.log(error);
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  router.get('/create', (req, res, next)=> {
    res.render("./drones/create-form")
  })
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  router.post("/create", (req,res,next)=>{
    const { name, propellers, maxSpeed } = req.body

    Drone.create({name, propellers, maxSpeed})
    .then((newDrone)=> {
      console.log(newDrone);
      res.redirect("/drones");
    })
    .catch((error)=> {
      console.log(error)
      res.redirect('drones/create');
    })
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id
  Drone.findById(id)
  .then(droneFound => res.render("./drones/update-form",droneFound))
  .catch(error=>console.log(error))
});
  

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

    const id=req.params.id;
    const {name, propellers, maxSpeed} =req.body

    Drone.findByIdAndUpdate(id, {name,propellers,maxSpeed})
    .then(updateDrone => {
      console.log(updateDrone);
      res.redirect("/drones");
    })
    .catch((error)=> {
      console.log(error)
      res.redirect(`/${id}/edit`);
    })
  }); 

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  router.post("/:id/delete", (req,res,next)=>{
    const id= req.params.id;
    Drone.findByIdAndDelete(id)
    .then(deleteDrone => {
      console.log("this drone has been deleted", deleteDrone);
      res.redirect("/drones");
    })
    .catch((error)=> {
      console.log(error)
      res.redirect('/drones');
    })
  })
});

module.exports = router;
