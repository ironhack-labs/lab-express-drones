const express = require("express");
const router = express.Router();

// Importing `DroneModel`.
const DroneModel = require("../models/Drone.model");

// Iteration #2: Listing all the drones.
router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      console.log("Information found.");
      res.render("drones/list.hbs", { drones });
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong.", err);
    });
});

// Iteration #3: Adding a new drone.
router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
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

// Iteration #4: Updating a drone.
router.get("/drones/:id/edit", (req, res, next) => {
  const id = req.params.id;

  DroneModel.findById(id)
    .then((drone) => {
      res.render("drones/update-form.hbs", drone);
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong.", err);
      res.redirect("/drones/create");
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const id = req.params.id;

  DroneModel.findByIdAndUpdate(id, { $set: req.body })
    .then(() => {
      console.log("Data was updated successfully.");
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong.", err);
      res.redirect("/drones/create");
    });
});

// Iteration #5: Deleting a drone.
router.post("/drones/:id/delete", (req, res, next) => {
  const id = req.params.id;

  DroneModel.findByIdAndDelete(id)
    .then(() => {
      console.log("Data was deleted successfully.");
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong.", err);
    });
});

module.exports = router;
