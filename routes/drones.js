const express = require("express");

// require the Drone model here
const DroneModel = require("./../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  DroneModel.find()
  .then((drones) => {
    res.render("drones/list.hbs", { title: "drones crud", drones });
  })
  .catch(next);});

router.get("/drones/create", async function (req, res, next) {
    try {
      await DroneModel.create(req.body);
      res.redirect("/drones/create-form.hbs");
    } catch {
      next(err);
    }
  }); 

router.post("/drones/create", (req, res, next) => {
    const newDrone=req.body;
    DroneModel.create(newDrone)
      .then((dbResult) => {
      res.send("Well done, new Drone created");
      })
      .catch(next);}); 

router.get("/drones/:id/edit", (req, res, next) => {
  DroneModel.findById(req.params.id)
  .then((dbResult) => {
    res.render("drones/update-form.hbs", {
      drone: dbResult,
    });
  })
  .then((dbErr) => {
    next(dbErr);
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
//Droneodel findbyId and Update  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
