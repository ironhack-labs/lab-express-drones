const express = require('express');
const Drones = require('../models/Drone.model.js');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drones.find({})
  .then(info=>{
    res.render("drones/list",{info})
    console.log(info)
  })
  .catch(error =>{
    console.log(`mira tu error ${error}`)
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const newD = req.body
  Drones.create(newD)
  // .then((info)=>{
  //   console.log("Todo en orden Bitches")
  //   res.render("drones/create-form",{newD})
  // }) COMO MANDO UN "ALERTA" O NOTIFICANCIÓN A LA MISMA RUTA
  .then(()=>{
    console.log("Todo en orden")
    res.redirect("/drones")
  })
  .catch(error =>{
    console.log(`QUE HORROR ${error}`)
  })
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  const info = req.params.id
  Drones.findById(info)
  .then((data)=>{
    res.render("drones/update-form.hbs",{data})
    console.log(data)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const uptDId = req.params.id
  const newD = req.body 
  Drones.findByIdAndUpdate(uptDId , newD ,{new:true})
  .then(()=>{
    console.log("Todo en orden" , uptDId ,newD)
    res.redirect("/drones")
  })
  .catch(error =>{
    console.log(`QUE HORROR ${error}`)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  const delDId = req.params.id
  Drones.findByIdAndDelete(delDId)
  .then(()=>{
    res.redirect("/drones")
  })
  .catch(error =>{
    console.log(`QUE HORROR ${error}`)
  })
});

module.exports = router;
