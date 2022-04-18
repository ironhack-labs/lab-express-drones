const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
    Drone.find()
        .then((drones) => {
        res.render("drones/list", { drones });
    });
});

router.get("/drones/create", (req, res, next) => {
    res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
    const { name, propellers, maxSpeed } = req.body;

    Drone.create({ name, propellers, maxSpeed })
        .then(() => {
            res.redirect("/drones");
        })
        .catch((err) => {
            console.log(err);
            res.redirect("/drones/creat");
        });
});

router.get("/drones/:id/edit", (req, res, next) => {
    const { id } = req.params;

    Drone.findById(id)
        .then((drone) => {
            res.render("drones/update-form", drone);
        })
        .catch((err) => console.log(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
    const { name, propellers, maxSpeed } = req.body;
    const { id } = req.params;

    Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
        .then(() => {
            res.redirect("/drones");
        })
        .catch((err) => console.log(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
    const { id } = req.params;

    Drone.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/drones");
        })
        .catch((err) => console.log(err));
});

module.exports = router;
