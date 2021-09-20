const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone   =require("./../models/Drone.model")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
 Drone.find({}) //todos los drones sin filtro
        .then((dbDrones)=>{
        res.render("drones/list",{
       dronesList:dbDrones
          })

      })

        .catch((e)=>{
          console.log(e)
        })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 //DESTRUCTURACION DE OBJETOS

 const{name,propellers,maxSpeed}=req.body
 //INSERTAR LOS DATOS EN LA BASE DE DATOS

 Drone.create({
   name,
   propellers,
   maxSpeed
 })
      .then((newDrone)=>{
        console.log(newDrone)
        //Respuesta al cliente
        res.redirect("/drones")
      })
      .catch((e)=>{
        console.log(e)
      })
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  //console.log(req.params)
  //Obtemos el ID del request
  const{id}=req.params
  //Buscamos el dron por ID en mongo
  Drone.findById(id)
  .then((drone)=>{
    //Verificamos que es el drone que queremos en la consola
    console.log(drone)
    //cargamos el form con la informaicon del drone
    res.render("drones/update-form",drone)
  })
  .catch((e)=> console.log(e))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  //console.log(req.params)
  //Obtiene los valores del form 
  const{name,propellers,maxSpeed}=req.body
  // Obtengo el ID del drone que estamos editando
  const{id}=req.params

  Drone.findByIdAndUpdate(id,{
    name:name,
    propellers:propellers,
    maxSpeed:maxSpeed
  })
  .then((data)=>{
    //IMprimimos la informacion actualizada
    console.log(data)
    console.log("Drone Actualizado por ID")
    res.redirect("/drones")
  })
  .catch((e)=>console.log(e))



});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const{id}=req.params
  Drone.findByIdAndDelete(id)
  .then((drone)=>{
    
    console.log("Drone eliminado")
    res.redirect("/drones")
  })
  .catch((e)=>console.log(e))
});

module.exports = router;
