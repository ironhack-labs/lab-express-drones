const express = require('express');
const router = express.Router();


// require the Drone model here
const Drone = require("../models/Drone.model")

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find()
    res.render('drones/list.hbs', {drones})
  } catch (error) {
    console.log(error)
  }
});

router.get('/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/create-form', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const {name, propellers, maxSpeed} = req.body;

    await Drone.create({name, propellers, maxSpeed})
    res.redirect('/drones')
} catch (err) {
    console.log(err);
    next(err)
}
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const drone = await Drone.findById(req.params.id);
    res.render("drones/update-form", drone)
} catch(err) {
    console.log(err)
    next(err);
}
 
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params
    const {name, propellers, maxSpeed} = req.body
    
    await Drone.findByIdAndUpdate(id, {
      name, propellers, maxSpeed
    })

    res.redirect("/drones")

} catch (err) {
    console.log(err)
    next(err)
}
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const {id} = req.params
    const {name, propellers, maxSpeed} = req.body
    
    await Drone.findByIdAndDelete(id, {
      name, propellers, maxSpeed
    })

    res.redirect("/drones")

} catch (err) {
    console.log(err)
    next(err)
}
});

module.exports = router;
