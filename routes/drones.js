const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((drones) => {
      //console.log("aqui los drones",drones)
      res.render("drones/list", { drones });
    })
    .catch((error) => {
      console.log("error", error);
      next(); //esto me enviará a la página de errores.
    });

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
  .then((drone) => {
    res.render("index", drone); 
  })
  .catch((error) => {
    console.log(error);
    res.render('drones/create-form')
    next();
  });

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  Drone.findById(id)
  .then(drone=>{
    //console.log(drone)
      res.render("drones/update-form",drone)
  })
  .catch(error=>{
      console.log("el Error:",error)
      next()
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
//req.body es la info que recibimos del user qe sera nuestra data para actualizar.
  const { id } = req.params;
  Drone.findByIdAndUpdate(id,req.body,{new:true}) 
  .then((drone) => {
    //console.log("la info que yo meto",req.body) // la info que yo paso en el formulario
    //console.log("info actualizada",drone)//si seteo new : false, entonces el return del then es el array original, caso contrario, el return es la nueva info.
    res.render("index",{...drone.toObject(), isEdit:true}); //el new:true arriba sirve por si quiero usar la nueva info metida en alguna página. Recuerda que es el return del then, entonces será lo que metas al render.
  })
  .catch((error) => {
    console.log(error);
    res.render('drones/update-form')
    next();
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
 const {id} = req.params 
 Drone.findByIdAndDelete(id)
 .then(() =>{
  res.redirect('/')
 })
 .catch((error) => {
  console.log("este es el error, wey",error);
  res.render('drones/list')
  next();
});
});

module.exports = router;
