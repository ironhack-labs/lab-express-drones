const express = require('express');
const router = express.Router();

const Dron = require("./../models/Drone.model")


router.get('/drones', (req, res, next) => {

  Dron
  .find()
  .then(drones => res.render("drones/list", {drones}))
  .catch(err => console.log(err))

});

router.get('/drones/create', (req, res, next) => {
   res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {

  const {name, propellers, maxSpeed} = req.body

  Dron
  .create({name, propellers, maxSpeed})
  .then(() => res.redirect("/drones"))
  .catch(() => res.render("tryagain"))
});

router.get('/drones/:dron_id/edit', (req, res, next) => {

  const { dron_id } = req.params
  
  Dron
  .findById(dron_id)
  .then(bookByIdFromDB => res.render("drones/update-form",  bookByIdFromDB ))
  .catch(err => console.log(err))

});

router.post('/drones/:dron_update_id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { dron_update_id } = req.params

  Dron
  .findByIdAndUpdate(dron_update_id,{name, propellers, maxSpeed})
  .then(()=> res.redirect("/drones"))
  .catch(err => console.log(err))
});

router.post('/drones/:dron_delete_id/delete', (req, res, next) => {
    const { dron_delete_id } = req.params

    Dron
    .findByIdAndDelete( dron_delete_id)
    .then(()=> res.redirect("/drones"))

});

module.exports = router;
