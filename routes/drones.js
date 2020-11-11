const express = require('express');

// require the Drone model here
const drone = require('../models/Drone.model')


const router = express.Router();

router.get('/drones', (req, res, next) => {
    // Iteration #2: List the drones
    // ... your code here
    drone.find({})
        .then((dbDrones) => {
            res.render('drones/list', { dbDrones })
        })
        .catch((error) => `Error while fetching all drones: ${error}`)
});


//GET route in order to create and render the form for the new data.
router.get('/drones/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    // ... your code here
    drone.find()
        .then((dbDrones) => {
            res.render("drones/create-form", { dbDrones });
        })
        .catch((err) =>
            console.error(`Err while displaying post input page: ${err}`)
        );

});

//POST route in order to get the data submited from the previous form used by the user and create a new drone in the database
router.post('/drones/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    // ... your code here
    let { name, propellers, maxSpeed } = req.body;
    drone.create({ name, propellers, maxSpeed })
        .then(() => {
            res.redirect('/drones');
        })
        .catch((err) =>
            console.error(`Error while creating drone: ${err}`, ));

});

router.get('/drones/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    // ... your code here
    let { id } = req.params;
    drone.findById(id)
        .then((edit) =>
            res.render('drones/update-form', edit))
        .catch((err) =>
            console.error(`Error while getting a drone to edit: ${err}`));
});


router.post('/drones/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    // ... your code here
    let { id } = req.params;
    let { name, propellers, maxSpeed } = req.body;
    drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
        .then(() => res.redirect("/drones"))
        .catch((err) =>
            console.error(`An error occurred while updating drone ${err}`, ));
});


//iteration 5 to delete
router.post('/drones/:id/delete', (req, res, next) => {
    let { id } = req.params;
    drone.findByIdAndDelete(id)
        .then(() =>
            res.redirect("/drones"))
        .catch((err) =>
            console.log(`Error while deleting drone: ${err}`));
});





module.exports = router;