const express = require("express");
const router = express.Router();

// require the Drone model here´
const Drone = require("../models/Drone.model.js");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    let allDronesFromDB = await Drone.find();
    res.render("drones/list.hbs", { drones: allDronesFromDB });
  } catch (error) {
    console.log(error);
  }
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    // Object destructuring with req.body
    // There's always a match between and input's name and a req.body property's names
    const { name, propellers, maxSpeed } = req.body;

    await Drone.create({ name, propellers, maxSpeed });
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const {droneId} = req.params;
    let foundDrone = await Book.findById(droneIdId);
    res.render('books/book-edit.hbs', {book: foundDrone})
}
catch (error){
    console.log(error)
}
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const {droneId} = req.params;
    const {title, author, description, rating} = req.body;
    await Book.findByIdAndUpdate(droneId, {title, author, description, rating}, {new: true});
    res.redirect('/books');
}
catch (error){
    console.log(error)
}
});

router.post("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try{
    const {droneId} = req.params;
    await Book.findByIdAndDelete(droneId);
    res.redirect('/books')
}
catch(error){console.log(error)}
});

module.exports = router;
