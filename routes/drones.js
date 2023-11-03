const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')

//listado de drones
router.get('/drones', (req, res, next) => {
  
  Drone
    .find()
    .then(drones => res.render('drones/list', {drones}))
    .catch(err => console.log(err))

})


// creaccion de drone (from)
router.get('/drones/create', (req, res, next) => {
    res.render('drones/create-form')

})

router.post('/drones/create', (req, res, next) => {
console.log("--------ESTO ES LO QUE TE METE EL USUARIO EN EL FROMULARIO------", req.body)

// const name = req.body.name
// const propellers = req.body.propellers
// const maxSpeed = req.body.maxSpeed

     const { name , propellers, maxSpeed} = req.body

      Drone
      .create({name: name , propellers: propellers, maxSpeed: maxSpeed}) //hay que respetar la estructura del modelo
      .then(() => res.redirect('/drones'))
      .catch(err => res.redirect('/drones'))
  
})

router.get('/drones/:id/edit', (req, res, next) => {
  
  const {id} = req.params

  Drone
  .findById(id)
  .then(drones => res.render ('drones/update-form', drones))
  .catch(err => console.log(err))

})

router.post('/drones/:id/edit', (req, res, next) => {
  
  const {name, propellers, maxSpeed} = req.body
  const {id} = req.params

  Drone
  .findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then(()=> res.redirect('/drones'))     // a redirect le tengo que pasar solo la url a la que tiene que ir
  //.catch(err => console.log(err))
  .catch(err => res.redirect('/drones'))
})

router.post('/drones/:id/delete', (req, res, next) => {
  
  const {id} = req.params

    Drone
    .findByIdAndDelete(id)
    .then(()=> res.redirect('/drones'))
    .catch(err => res.redirect('/drones'))

})

module.exports = router;
