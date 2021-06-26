//Grupo de rutas (routes)
const router = require('express').Router()
//Exportar los controladores (req,res,next)=>{res.render('index')}
const dronesController = require('../controllers/drones.controller')
//Definimos la ruta y Llamamos al controlador y le pasamos el metodo listMovies
router.get('/', dronesController.listDrones)
router.get('/create', dronesController.createDrone)
router.post('/create', dronesController.doCreateDrone)
module.exports = router
