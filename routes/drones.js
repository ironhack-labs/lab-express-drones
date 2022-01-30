const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {

  Drone.find().then((drone) => {
    res.render("drones/list", {
      drone,
    });
    /*  .catch((e) => next(e)); */
  });
});

router.get("/drones/create", (req, res, next) => {

  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {

  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then((droneFromForm) =>
      console.log(`New drone created: ${droneFromForm.name}`)
    )
    .then(() => res.redirect("/drones"))
    .catch((error) => console.log(`Something went wrong:`, error));
});

router.get("/drones/:id/edit", (req, res, next) => {

  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form", { ...drone.toJSON(), detail: true });
    })
    .catch((e) => next(e));
});

router.post("/drones/:id/edit", (req, res, next) => {
  
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then((drone) => {
      console.log(`Drone ${drone.name} sucessfully updated`);
      res.redirect("/drones");
    })
    .catch((e) => {
      res.redirect("/drones/:id/edit");
      console.log(e);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
Drone.findByIdAndDelete(req.params.id)
.then(() => {
  res.redirect('/drones')
})
.catch((e) => next(e));
});

module.exports = router;
