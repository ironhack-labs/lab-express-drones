const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try { 
    const drones = await Drone.find()
    res.render("drones/list", { drones })
   
  } catch (error) {
    res.send(error)
  }

});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render("drones/create-form")
  } catch (error) {
    res.send(error)
  }
});

router.post("/drones/create", async (req, res, next) => {
  try {
    await Drone.create(req.body)
    res.redirect("/drones")
  } catch (error) {
    res.redirect("/drones/create");
  }
})

router.get("/drones/:id/edit", async (req, res, next) => {
  try {
    const drone = await Drone.findById(req.params.id)
    res.render("drones/update-form", drone)
  } catch (error) {
    res.send(error)
  }
})

router.post("/drones/:id/edit", async (req, res, next) => {
  try {
    console.log("-------------Datas", req.params.id, req.body)
    await Drone.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/drones")
  } catch (error) {
    console.log(error);
    res.render(`/drones/${req.params.id}/edit`);
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    await Drone.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error);
  }
  res.redirect("/drones")
});

module.exports = router;
