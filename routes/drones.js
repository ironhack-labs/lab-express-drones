const express = require("express");
const router = express.Router();
const droneModel = require("../models/Drone.model");

// require the Drone model here

//Ruta para Lista de Drones
router.get("/drones", (req, res, next) => {
  droneModel
    .find()
    .then((findedDrones) => {
      res.render("drones/list", { data: findedDrones });
    })
    .catch((err) => console.log(err));
});

//Ruta para Crear un Drone
router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  droneModel.create(req.body)
  .then(nuevoDrone => {
    console.log(nuevoDrone)
    res.redirect("/drones")
})
.catch(err => {
  alert("Hubo un error, vuelve a intentarlo")
  res.render("/drones/create")
})
})

//Editar Drone
router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;

  droneModel.findById(id)
  .then(resultadoDrone => {
    res.render("drones/update-form", { droneModel: resultadoDrone })

  })
  .catch(err => console.log(err))
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params
  
  droneModel.findByIdAndUpdate(id, req.body, { new: true})
  .then(droneActualizado => {
    console.log("Drone Actualizado", droneActualizado)
    res.redirect("/drones")
    
    
  })
.catch(console.log)

});

//Eliminar Drone
router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;
  droneModel.findByIdAndDelete(id)
  .then(() => {
    console.log("Drone Eliminado")
    res.redirect("/drones")
  })
  .catch(console.log)
});

module.exports = router;
