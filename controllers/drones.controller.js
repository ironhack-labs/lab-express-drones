const Drone = require('../models/Drone.model')

//READ

module.exports.list = (req, res, next) => {
    Drone.find()
        .then(drones => {
            res.render('drones/list', { drones })
        })
        .catch(next)
}

module.exports.droneDetail = (req, res, next) => {
    const { id } = req.params   //cuando llega a la ruta va a coger el ID
    
    Drone.findById(id)
        .then((drone)=> {
            res.render('drones/detail', { drone })
        })
        .catch(err =>{
            console.error('Error: no details', err)
        })
}

//CREATE

module.exports.create = (req, res, next) => {
    console.log('test')
    res.render('drones/form')
}

module.exports.doCreate = (req, res, next) => {
    console.log('post')

    Drone.create(req.body)
        .then(createdDrone => {
            console.log(createdDrone)
            res.redirect('/drones')
        })
        .catch(err =>{
            console.error('Error: not created', err)
        })

}

//UPDATE

module.exports.edit = (req, res, next) => {
    const { id } = req.params
    
    Drone.findById(id)
        .then(drone => {
            res.render('drones/form', { drone, isEdit: true })
        })
}

module.exports.doEdit = (req, res, next) => {
    const { id } = req.params
    
    Drone.findByIdAndUpdate(id, req.body, { new: true }) // new true es para que te devuelva el nuevo en el .then
        .then(drone => {
            console.log({ drone })
            
            res.redirect(`/drones/${drone.id}`)
        })
}

//DELETE

module.exports.delete = (req, res, next) => {
    const { id } = req.params

    Drone.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/drones')
        })
        .catch(next)
}


