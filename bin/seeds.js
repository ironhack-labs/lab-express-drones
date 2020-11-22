// Iteration #1
const Drones = require('../models/drone.model')
const mongoose = require('mongoose')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];


  mongoose
  .connect('mongodb://localhost/express-drones-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Drones.create(drones).then((results) => {
        console.log(results.length)
        mongoose.connection.close()
    }).catch(err=>console.log(err))
  })
  .catch(err => console.error('Error connecting to mongo', err));
  