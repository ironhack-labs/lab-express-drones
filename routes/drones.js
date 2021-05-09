const express = require("express");

// require the Drone model here
const DroneModel = require("./../models/Drone.model.js"); //link with the model I created in ./../models/Drone.models.js use tab to have the correct path

const router = express.Router();

router.get("/", (req, res, next) => res.render("index"));

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  // i want drones pages with drones data
  DroneModel.find()
    .then((dbResult) => {
      res.render("drones/list.hbs", { drones: dbResult });
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

router.get("/drones/create-form", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  // console.log(dbResult);
  res.render("drones/create-form.hbs");
});

router.post("/drones/create-form", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  DroneModel.create(req.body)
    .then((dbResult) => {
      // console.log(dbResult);
      res.redirect("/drones"); //mettre la route de la page visée !!!
    })
    .catch((dbError) => next(dbError));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  DroneModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("drones/update-form.hbs", {
        drone: dbResult
      });
    })
    .catch((dbErr) => next(dbErr));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  DroneModel.findByIdAndUpdate(req.params.id, req.body)
    .then((dbResult) => {
      res.redirect("/drones"); //mettre la route de la page visée !!!
    })
    .catch((dbError) => next(dbError));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  DroneModel.findByIdAndDelete(req.params.id)
    .then((dbSuccess) => {
      res.redirect("/drones"); //mettre la route de la page visée !!!
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

module.exports = router;
