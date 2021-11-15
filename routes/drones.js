const express = require('express');
const router = express.Router();
router.use(express.json())
// require the Drone model here
const Drone = require("../models/Drone.model")
router.route('/drones')
.get( async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    let all = await Drone.find()
    res.render("drones/list", {all})
  } catch(err) {
    console.log(err)
  } 
})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")

});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    const {name, propellers, maxSpeed} = req.body
    const createDrone = await Drone.create({name,propellers,maxSpeed})
    all = await Drone.find()
    res.render("drones/list", {all})
  }
  catch(err){
    res.render("drones/create-form")
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const drone = await Drone.findById(id)
  console.log(drone)
  res.render("drones/update-form",drone)
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const {id} = req.params
    const {name, propellers, maxSpeed} = req.body
    const updatedDrone = await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
    let all = await Drone.find()
    res.render("drones/list", {all})
  }
  catch(err){
    console.log(err)
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  const deleteDrone = await Drone.findByIdAndRemove(id)
  let all = await Drone.find()
  res.render("drones/list", {all})
});

module.exports = router;
