const express = require('express');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
    // Iteration #2: List the drones
    // ... your code here
    Drone
        .find()
        .then(drones => {
            res.render('drones/list')
                .catch(err => console.log(error))
        })

});

router.get('/drones/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    // ... your code here
    .then(drones => {
        res.render('drones/create-form ')
    })
});

router.post('/drones/create', (req, res, next) => {
            // Iteration #3: Add a new drone
            // ... your code here
            Drone
                .create(req.body)
                .then(() => {
                    res.redirect('/drones')
                })
                .catch(err => {
                    console.log(error)
                    res.redirect('/drones/create')
                });

            router.get('/drones/:id/edit', (req, res, next) => {
                // Iteration #4: Update the drone
                // ... your code here
                Drone
                    .findById(req.params.id)
                    .then((drone) => {
                        res.render('drones/update-form.hbs')
                    })
            });

            router.post('/drones/:id/edit', (req, res, next) => {
                        // Iteration #4: Update the drone
                        // ... your code here
                        Drone
                            .findByAndUpdate(req.body)
                            .then((drones => {
                                    res.redirect(/drones)
                                    }))
                            });

                    router.post('/drones/:id/delete', (req, res, next) => {
                        // Iteration #5: Delete the drone
                        // ... your code here
                        Drone
                            .findByIdAndDelete()
                            .then(() => res.redirect('/drones'))
                    });

                    module.exports = router;