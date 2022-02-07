const express = require('express');
const router = express.Router();
const Drone = require("./../models/Drone.model");

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const mongoDrones = await Drone.find();
    const drones = [];
    mongoDrones.forEach((item)=> {
      let {_id, name, propellers, maxSpeed} = item;
      drones.push({_id, name, propellers, maxSpeed});
    });
    res.render("drones/list.hbs", { drones })
    // res.send({drones});
  } catch(err) {
    console.log(err);
    next(err);
  }
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render("drones/create-form.hbs");
});


router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const newDrone = req.body;
    const mongoConfirm = await Drone.create(newDrone, {new: true});
    res.redirect("/drones");
  } catch(err) {
    console.log(err);
    next(err);
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const droneToBeUpdated = await Drone.findById(id);
    const { _id, name, propellers, maxSpeed } = droneToBeUpdated;
    const cleanedDrone = { _id, name, propellers, maxSpeed };
    res.render("drones/update-form.hbs", cleanedDrone);
  } catch(err) {
    console.log(err);
    next(err);
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  try {
    const updatedData = req.body;
    const mongoConfirm = await Drone.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch(err) {
    console.log(err);
    next(err);
  }
});

router.get('/drones/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    const mongoConfirm = await Drone.findByIdAndDelete(id);
    res.redirect("/drones");
  } catch(err) {
    console.log(err)
    next(err);
  }
  // ... your code here
});

module.exports = router;
