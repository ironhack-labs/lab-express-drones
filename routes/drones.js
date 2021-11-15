const express = require('express');
const router = express.Router();

// Drone Model
const Drone = require("../models/Drone.model");


// default route
router.all('/', (req, res) => {
  res.render('index');
});


router.get('/drones', (req, res, next) => {
  
  Drone
  .find()
  .then( (drones) => { 
    res.render("drones/list", { drones: drones }) 
  })
  .catch( (error) => res.render("error", { error: error } ))
  })


// sister routes for Drones Creation:
router.route("/drones/create")
  .get((req, res) => {
    res.render("drones/create-form")
  })
  .post((req, res) => {
    const {name, propellers, maxSpeed} = req.body

    Drone
      .create( { name, propellers, maxSpeed } )
      .then( (newDrone) => { 
        // The successful path is drones/list, therefore I need the list of all Drones before rendering the view:
        Drone.find()
          .then( (drones) => { 
            res.render("drones/list", { drone: newDrone, action: "created", drones: drones } )
            console.log("Drone created: ", newDrone);
          })
          .catch( (error) => res.render("error", { error: error } ))
      })
      .catch( (error) => res.render("drones/create-form", { errorCreation: error } ))
  })


// sister routes for Drones Edition:
router.route("/drones/:id/edit")
  .get((req, res) => {
    Drone
    .findById(req.params.id)
    .then( (drone) => {
      res.render("drones/update-form", { drone: drone } )  
      console.log(`About to update this dron: ${drone.name}`)
    })
    .catch( (error) => res.render("error", { error: error } ))
  })
  .post((req, res) => {
    const {name, propellers, maxSpeed} = req.body

    Drone.findByIdAndUpdate({ _id: req.params.id }, { name: name, 
                                              propellers: propellers, 
                                              maxSpeed: maxSpeed, 
                                              new: true })
      .then( (updatedDrone) => { 
        Drone.find()
          .then( (drones) => { 
            res.render("drones/list", { drone: updatedDrone, action: "updated", drones: drones } )
            console.log("Drone updated: ", updatedDrone);
          })
          .catch( (error) => res.render("error", { error: error } ))
      })
      .catch( (error) => {
        Drone.findById(req.params.id)
        .then( (drone) => {
          res.render("drones/update-form", { drone: drone, errorUpdate: error } )  
          console.log(`Error trying to update this dron: ${drone.name}`)
        })
        .catch( (error) => res.render("error", { error: error } ))
      })
  })


// Delete drone
router.get('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete({_id: req.params.id})
  .then( (deletedDrone) => {

    // List of drones, to show in drones/list (successful path)
    Drone.find()
    .then( (drones) => { 

      // or: res.redirect('/drones')

      res.render("drones/list", { drones: drones, action: "deleted", drone: deletedDrone } )
      console.log("Drone deleted: ", deletedDrone);
    })
    .catch( (error) => res.render("error", { error: error } ))
  })
  .catch( (error) => {
    // Error path
    Drone.findById(req.params.id)
      .then( (drone) => {
        // In case of error, we render again List of drones, so we need the list.
        Drone.find()
          .then( (drones) => { res.render("drones/list", { drone: drone, drones: drones, errorDelete: error })})
          .catch( (error) => res.render("error", { error: error } ))
      })
      .catch( (error) => {
        console.log(`Error trying to delete this dron: ${drone.name}`)
        res.render("error", { error: error } )
      })
  })
})

module.exports = router;
