const express = require('express');

// require the Drone model here
const DroneModel = require("../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
    .then((dbRes) => {
      // console.log(dbRes);
      res.render("drones/list.hbs", { drones: dbRes });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/drones/add-another", (req, res, next) => {
  res.render("drones/create-form.hbs");
});


router.post('/drones/create', async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body; 
  
  try {
    await DroneModel.create({
      name,
      propellers,
      maxSpeed
      
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
   
});
 

router.get('/drones/edit/:id', (req, res, next) => {
  DroneModel.findById(req.params.id)
  .then((drone) => res.render("drones/update-form", { drone }))
  .catch(next);
});


router.post('/drones/edit/:id', async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    await DroneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.get("/drones/delete/:id", async (req, res, next) => {
  try {
    await DroneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    next(err); 
  }
});

module.exports = router;
