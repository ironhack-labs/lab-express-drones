const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");


router.get("/drones", async (req, res) => {
  const drones = await Drone.find();
  res.render("drones/list", { drones });
});

router.get("/drones/create", (req, res) => {
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res) => {
  const { name, propellers, maxSpeed } = req.body;             //we pass with .post using this method
  await Drone.create({
      name,
      propellers,
      maxSpeed,
  });
  res.redirect("/drones");
});

router.get('/drones/:id/edit', async (req, res, next) => {   
  const droneFound = await Drone.findById(req.params.id);
  res.render("drones/update-form", droneFound);
});

router.post("/drones/:id/edit", async (req, res) => {                    
  const { name, propellers, maxSpeed } = req.body;             
  await Drone.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed,
  });
  res.redirect("/drones");  
});


router.post("/drones/:id/delete", async (req, res) => {                  //we are already on the page, therefore no router.get first                   
  await Drone.findByIdAndDelete(req.params.id)   
  res.redirect("/drones");
});

module.exports = router;
