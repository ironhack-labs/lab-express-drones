const express = require('express');
const Drones = require("../models/Drone.model");


const router = express.Router();

router.get('/drones', (req, res) => {
  Drones.find()
    .then(allTheDronesFromDB => {
      console.log(`Retrieved drones from DB:`, allTheDronesFromDB);
      res.render("../views/drones/list.hbs", {drones: allTheDronesFromDB});
    })
    .catch(error => console.log("Error while getting the drones from the DB: ", error));
});

router.get('/drones/create', (req, res) => { 
  res.render("../views/drones/create-form.hbs")
 
});

router.post('/drones/create', (req, res) => {
  const {name, propellers,maxSpeed} = req.body;
  Drones.create({name:name,propellers:propellers, maxSpeed:maxSpeed})
    .then(()=> {
    res.redirect('/drones')
    })
    .catch(()=> {
    res.render('../views/drones/create-form.hbs')
    })
});

router.get('/drones/:id/edit', (req, res) => {
  // Iteration #4: Update the drone
  Drones.findById(req.params.id)
  .then((response)=> {
    res.render('../views/drones/update-form.hbs',{response})
    })
    .catch(()=> {
    res.send('Nope!Not working,check again everything!')
    })
});


router.post('/drones/:id/edit', (req, res) => {
  const id = req.params.id
  const {name, propellers, maxSpeed} = req.body;
  Drones.findByIdAndUpdate(id, {$set: {name: name, propellers: propellers,maxSpeed:maxSpeed }})
  .then((todo) => {
       res.redirect('/drones')
  })
  .catch((response) => {
       res.render('../views/drones/update-form.hbs',{response})
  })

});

router.post('/drones/:id/delete', (req, res, next) => {
  const id = req.params.id
  const {name, propellers, maxSpeed} = req.body;
  Drones.findByIdAndDelete(id, {$set: {name: name, propellers: propellers,maxSpeed:maxSpeed }})
  .then((todo) => {
       res.redirect('/drones')
  })
  .catch((response) => {
       res.render('../views/drones/update-form.hbs',{response})
  })
});

module.exports = router;
