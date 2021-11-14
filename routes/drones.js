const express = require('express');


// const router = express.Router();

// =========> ? Questions ? <==========
// Why "express.Router();" and not just "app = express();" ???? 
// Why express.Router(); and expres(); are needed?
// Why there are many things set again in app.js ?????

// connect to dabatase
require('../db');  

// I use this so far:
app = express();

// Handlebars, views, and partials

const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, "../views/partials"));

// Use public folder
app.use(express.static(path.join(__dirname, '../public')));

// Drone Model
const Drone = require("../models/Drone.model");


// ======== ROUTES ========= //

// default route
app.all('/', (req, res) => {
  res.render('index');
});


app.get('/drones', (req, res, next) => {
  
  Drone.find()
  .then( (drones) => { 
    res.render("drones/list", { drones: drones }) 
    console.log("Drones are:", drones);
  })
  .catch( (error) => res.render("error", { error: error } ))
  })


// sister routes for Drones Creation:
app.route("/drones/create")
  .get((req, res) => {
    res.render("drones/create-form")
  })
  .post((req, res) => {
    const {name, propellers, maxSpeed} = req.body

    Drone.create( { name, propellers, maxSpeed } )
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
app.route("/drones/:id/edit")
  .get((req, res) => {
    Drone.findById(req.params.id)
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
app.get('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete({_id: req.params.id})
  .then( (deletedDrone) => {

    // List of drones, to show in drones/list (successful path)
    Drone.find()
    .then( (drones) => { 
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

module.exports = app;
