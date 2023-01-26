//aqui metemos todo la funcion de routes.get,  lo que va dentro de la funcion de routes
//exportamos tambien el modelo


const { model } = require('mongoose')

//1.llamamos al modelo
const Drone = require('../models/Drone.model')

//exportamos funciones
//es un objeto y por ello podemos meter claves-valor, metemos un objetos con muchas funciones como:

//tienen en comun req, res, next
//dentro definimos la logica de cada una de las rutas


//*******llamar este archivo a las rutas. routes/drones.js */

//despues de que se vea ek archivo de drones.js, viene a estas rutas
//para crear algo se llama al archivo drones/list.hbs
//allí se trabaja las claves de los drones

//2.creamos esto
//5. se añade algo a las carpetas
module.exports.list = (req, res, next )=> {
Drone.find()//para encontrar todos lo drones
//si todo va bien devuelve esto
.then((drones) => {
    res.render('drones/list', {drones})
})
//sino error
.catch()

}


module.exports.create = ( req, res, next)=> {
res.render('drones/create-form')// no buscamos en la base de datos porque estamos creando, no llamando.
}


module.exports.doCreate = (req, res, next )=> {// es donde metemos el formulario. el POST
    //****DE CONFIG/INDEX */
    //estas doos lineas son muy importantes para que nos lleguen informacion para el backend
    //app.use(express.urlencoded({ extended: false }));
    //app.use(cookieParser());
Drone.create(req.body)//si todo va bien,enseñame el dron creado
.then(drone => {
    console.log(drone)
    //ver el dron creado en la pantalla
    res.redirect('/drones')
})
.catch(err => console.log(err))
}



module.exports.update = (req, res, next )=> {
    Drone.findById(req.params.id)//buscamos el id en req.params.id
    .then(drone => {
        if(drone) {
            res.render('drones/update-form', {drone})
        }
        else {
            res.redirect('/drones')
        }
    })
    .catch(() => res.redirect('/drones'))
 
}


module.exports.doUpdate = (req, res, next) => {
    Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect('/drones')
    })
    .catch(err => console.log(err))
}

module.exports.delete = (req, res, next) => {
    Drone.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/drones')
    })
    .catch(err => {
        res.redirect('/drones')
    })
}
