// 1 Importaciones
const express        = require('express')
const router         = express.Router()

const dronController = require('./../controllers/dronController')   

// 2 Ruteo con base URL

//create
// Crear Dron - Vista (para ver el formulario)
router.get('/create-form', dronController.viewCreateDron)
//crear un dron
router.post('/create-form', dronController.createDron)

// Lectura de los Drones creados 
router.get('/', dronController.getAllDrones)

//Edit
//Editar un drone
router.get('/:dronID/edit', dronController.viewEditDron)
router.post('/:dronID/edit', dronController.editDron)

// DELETE
// BORRAR UN LIBRO ESPECÍFICO
router.post("/:dronID/delete", dronController.deleteDron)


// 3 Exportación
module.exports = router