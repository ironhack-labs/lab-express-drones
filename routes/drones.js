const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js"); 

//GET route to retrieve and display all the drones
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDronesFromDB) => {
      console.log("Retrieved drones from DB:", allDronesFromDB);

      // we call the render method after we obtain the drones data from the database
      res.render("drones/list.hbs", { drones: allDronesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

// GET route to display the form
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

// POST get all the info user submitted through the form. Use this info to create a new drone in the database in the drones collection
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propeller, maxSpeed } = req.body;
  Drone.create({ name, propeller, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((droneToEdit) => {
      console.log(droneToEdit);
      res.render("drones/update-form.hbs", { drone: droneToEdit });
    })
    .catch((error) => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(
    id,
    { name, propellers, maxSpeed},
    { new: true }
  )
    .then((updatedDrone) => res.redirect(`/drones`)) // go to the details page to see the updates
    .catch((error) => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

module.exports = router;


/* 

// POST route to delete a book from the database
router.post('/books/:bookId/delete', (req, res, next) => {
  const { bookId } = req.params;
 
  Book.findByIdAndDelete(bookId)
    .then(() => res.redirect('/books'))
    .catch(error => next(error));
}); */