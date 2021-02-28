const express = require("express");

const droneModel = require("./../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  droneModel
    .find()
    .then((dbRes) => {
      res.render("drones/list.hbs", {
        drones: dbRes,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", async (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
 
 
  try {
    await droneModel.create({
      name,
      propellers,
      maxSpeed,
      
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
 
 


  // Iteration #3: Add a new drone
  // ... your code here
});

router.get("/drones/:id/edit", (req, res, next) => {
  droneModel.findById(req.params.id)
    .then((dbRes) => {
      res.render("drones/update-form.hbs", {
        drones: dbRes,
      });
    })
    .catch((error) => {
      next(error);
    });
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body; // destructuring syntax here !!!!
  try {
    await droneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed,
      
    });
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/drones/:id/delete", async (req, res, next) => {
  try{
    await droneModel.findByIdAndDelete(req.params.id)
    res.redirect("/drones")}
    catch(err) {next(err)}
    
 
});

module.exports = router;


