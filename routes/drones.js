const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model");
// require the Drone model here

router.get('/drones', async (req, res) => {
  // Iteration #2: List the drones
  // ... your code here
    const drones = await Drone.find();
    res.render("drones/list", { drones });
});


router.get('/drones/create', (req, res) => {
  // Iteration #3: Add a new drone
  // ... your code here
  
  res.render('drones/create-form.hbs') 

});


router.post('/drones/create', async (req, res) => {
  // Iteration #3: Add a new drone
  // ... your code here
    const{name, propellers, maxSpeed} = req.body;
    await Drone.create({
      name,
      propellers,
      maxSpeed, 
    });

    res.redirect("/drones");
  
});

router.get('/drones/:id/edit', async (req, res) => {
  // Iteration #4: Update the drone
  // ... your code here
const dronesToEdit = await Drone.findById(req.params.id);
res.render("drones/update-form", dronesToEdit);
});

router.post('/drones/:id/edit', async (req, res) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body;
  await Drone.findByIdAndUpdate(req.params.id, {
    name,
    propellers,
    maxSpeed,
});
  res.redirect("/drones");

});

router.post('/drones/:id/delete', async (req, res) => {
  // Iteration #5: Delete the drone
  // ... your code here
    await Drone.findByIdAndRemove(req.params.id);
    res.redirect("/drones");
});


module.exports = router;




