const express = require('express');
const Dron = require('../models/Drones.models');
const router = express.Router();


const router = express.Router();

router.get('/drones', (req, res, next) => {
  Dron.find().then(prueba => {
    console.log(prueba);
    res.render('drones/list', {
      drones: prueba
    })
  }).catch((error) => next(error))
});
router.get('/drones/create', (req, res, next) => {
  Dron.find()
  .then(dron => {
    console.log("este es el dron", dron);
    res.render('drones/create-form', {
      drones: dron
    })
  })
  .catch((error) => next(error))
});


router.post('/drones/create', (req, res, next) => {
  console.log("ESTE ES EL BODY", req.body);
  const {
    name,
    propellers,
    maxSpeed
  } = req.body;


  Dron.create({
      name,
      propellers,
      maxSpeed
    })
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
    
  });

  router.get('/drones/:id/edit', (req, res, next) => {
    const {
      id
    } = req.params
    
    Dron.findById(id)
      .then((dronEdicion) => {
        console.log(dronEdicion);
        res.render("drones/update-form", {
          Dron: dronEdicion
        });
      }).catch((e) => {
        next(e)
      })
    });

    router.post('/drones/:id/edit', (req, res, next) => {

      const {
        name,
        propellers,
        maxSpeed
      } = req.body;
      const {
        id
      } = req.params
    
      Dron.findByIdAndUpdate(id, {
          name,
          propellers,
          maxSpeed
        })
        .then((dronActualizado) => {
          res.redirect('/drones');
    
        }).catch((e) => {
          next(e);
        })
    
    });

    router.get('/drones/:id/delete', (req, res, next) => {
      const {
        id
      } = req.params
      Dron.findByIdAndDelete(id)
        .then(() => {
          res.redirect('/drones')
        })
        .catch(e => next(e))
});

module.exports = router; 