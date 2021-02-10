const express = require('express');
// const router = express.Router();
const Drone = require("../models/Drone.model.js")
    // require the Drone model here


const router = express.Router();

router.get('/drones', (req, res, next) => {
    // Iteration #2: List the drones
    // ... your code here

    Drone.find()
        .then(drones => {
            console.log(drones)
            res.render("drones/list", { drones })
        }).catch(error => { next(error) })
});

router.get('/drones/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    // ... your code here
    res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    // ... your code here
    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    Drone.create({
            name,
            propellers,
            maxSpeed
        }).then((droneCreated) => {
            res.redirect('/drones')
        })
        .catch(error => {
            res.render('drones/create-form')
        })
});

router.get('/drones/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    // ... your code here
    const droncito = req.params.id
    Drones.findById(droncito)
        .then((droncito) => {
            res.render("drones/update-form.hbs", { droncito })
            console.log(droncito)
        })
});

router.post('/drones/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    // ... your code here
    const { id } = req.params
    const { name, propellers, maxSpeed } = req.body
    Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
        .then((droneUpdated) => {
            res.redirect(`/drones/${droneUpdated.id}`)
        })
        .catch(error => next(error))
});

router.post('/drones/:id/delete', (req, res, next) => {
    // Iteration #5: Delete the drone
    // ... your code here
    const { id } = req.params
    Drone.findByIdAndDelete(id)
        .then(() => res.redirect('/drones'))
        .catch(error => next(error))

});

module.exports = router;