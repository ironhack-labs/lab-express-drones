const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones/create", (req, res) =>
  res.render("drones/create-form.hbs")
);

router.post("/drones/create", (req, res, next) => {
  //console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then((dronesFromDB) => res.redirect("/drones"))
    .catch((error) => res.redirect("/drones/create"));
});

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allTheDronesFromDB) => {
      //console.log("Retrieved drones from DB:", allTheDronesFromDB);
      // we call the render method after we obtain the drones data from the database -> allTheDronesFromDB
      res.render("drones/list.hbs", { drones: allTheDronesFromDB }); // pass `allTheDronesFromDB` to the view (as a variable books to be used in the HBS)
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  //console.log(req.params);
  let droneId = req.params.id;
  // let {id } = req.params; this is with object destructuring
  //console.log("The ID from the URL is: ", droneId);
  Drone.findById(droneId).then((theDrone) =>
    res.render("drones/update-form.hbs", { drone: theDrone })
  );
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  let droneId = req.params.id;

  const { name, propellers, maxSpeed } = req.body;
  console.log(req.body);
  Drone.findByIdAndUpdate(
    droneId,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then((updatedDrone) => res.redirect(`/drones`))
    .catch((error) => res.redirect("/drones/:id/edit"));
});

router.post("/drones/:droneId/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { droneId } = req.params;

  Drone.findByIdAndDelete(droneId)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

module.exports = router;
