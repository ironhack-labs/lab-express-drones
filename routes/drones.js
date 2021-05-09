const express = require("express");
const { listenerCount } = require("../models/Drone.model");
const DroneModel = require("../models/Drone.model");

// require the Drone model here

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((dbResult) => {
      res.render("drones/list.hbs", { name: "drones", drones: dbResult });
    })
    .catch((dbErr) => next(dbErr));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  /*DroneModel.create()
    .then(() => res.redirect("drones"))
    .catch((dbError) => res.redirect("/drones/create-form.hbs"));*/
    DroneModel.create(req.body)
    .then((dbResult) => res.redirect("/drones/create-form.hbs"))
    .catch((dbError) => next(dbError));
});


/*});*/

router.get("/drones/:id", (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("drones/update-form.hbs", {
        name: "drones",
        drones: dbResult,
      });
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findbyIdAndUpdate(req.params.id, req.body)
    .then((dbResult) => res.redirect("/drones/update-form.hbs"))
    .catch((dbError) => next(dbError));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id).then((drones) => {
    res.redirect("/drones");
  });
});

module.exports = router;
