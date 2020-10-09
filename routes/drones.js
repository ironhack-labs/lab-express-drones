const express = require("express");
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
      console.log("Information found!");
      res.render("drones/list.hbs", { drones });
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong.", err);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
    .then(() => {
      console.log("Data was added successfully.");
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong.", err);
      res.redirect("/drones/create");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;

  DroneModel.findById(id).then((drone) => {
    res.render("drones/update-form.hbs", drone);
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;

  DroneModel.findByIdAndUpdate(id, { $set: req.body }).then(() => {
    console.log("Data was updated successfully.");
    res.redirect("/drones");
  });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;

  DroneModel.findByIdAndDelete(id)
    .then(() => {
      console.log("It was deleted");
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Didnt work", err);
    });
});

module.exports = router;
