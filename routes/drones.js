const express = require("express");

// require the Drone model here
const DroneModel = require("./../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      res.render("drones/list.hbs", { title: "drones crud", drones });
    })
    .catch(next);
});
//Iteration 3: Create a new drone
router.get("/drones/create", async function (req, res, next) {
  try {
    await res.render("drones/create-form.hbs");
  } catch {
    next(err);
  }
});

router.post("/drones/create", (req, res, next) => {
  const NewDrone = req.body;
  console.log(req.body);
  DroneModel.create(NewDrone)
    .then((dbResult) => {
      res.redirect("/drones");
    })
    .catch(next);
});

//Iteration 4: Update a drone
router.get("/drones/:id/edit", (req, res, next) => {
  DroneModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("drones/update-form.hbs", {
        drone: dbResult,
      });
    })
    .catch((dbErr) => next(dbErr));
});

router.post("/drones/:id/edit", (req, res, next) => {
  //DroneModel findbyId and Update  // ... your code here
  console.log('--- req body => ------');
  console.log(req.body); // will contain the posted informations
  // it's an object : the keys are the names declared in the form
  DroneModel.findByIdAndUpdate(req.params.id, req.body)
    .then((dbResult) => {
      res.redirect("/drones");
    })
    .catch((dbError) => next(dbError));
});

//Iteration 5: Delete a given drone
router.get("/drones/:id/delete", (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
  .then((dbSuccess) => {
    res.redirect("/drones");
  })
  .catch((dbErr) => {
    next(dbErr);
  });
});

module.exports = router;
