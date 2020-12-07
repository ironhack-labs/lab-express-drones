const express = require('express');
const Drones = require("../models/drone-model")

// require the Drone model here

const router = express.Router();

router.get('/list', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try{
    const drones = await Drones.find();
    console.log(drones)
    res.render("drones/list", {drones})
  }catch(e){
    console.error(e)
  }
});

router.get('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try{
    res.render("drones/create-form")
  }catch(e){
    console.error(e)
  }
});

router.post('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
try{
const newDrone = await Drones.create(req.body)
res.redirect("/drones/list")
}catch(e){
  res.redirect("/drones/list")
  console.error(e)
}
});

router.get('/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
try{
  const {id} = req.params
  const findDrone = await Drones.findById(id)
  console.log(findDrone)
  res.render("drones/update-form", findDrone)
}catch(e){
  console.error(e)
}
});

router.post('/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try{
    const {id} = req.params;
    const {name,propollers,maxSpeed} = req.body;
    const updateDrone = await Drones.findByIdAndUpdate(id, {name,propollers,maxSpeed}, {new:true})
    res.redirect("/drones/list")

  }catch(e){
    console.error(e)
  }
});

router.post('/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
try{
  const {id} = req.params
  const deleteDrone = await Drones.findByIdAndDelete(id)
  res.redirect("/drones/list")
}catch(e){
  console.error(e)
}
});

module.exports = router;
