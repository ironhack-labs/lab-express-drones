// Iteration #1
//IMPORTACIONES
const mongoose= require('mongoose')
const Drone= require('../models/Drone.model.js')


//es necesario hacer la conexión a mongoose aquí tmbn...
//no se para que sirve la conexión del archivo config pero 
//causa problemas que nombremos diferente a la DB, así que 
//hay que copiar el nombre que se le da allá.
 mongoose
   .connect('mongodb://localhost/express-drones-dev', {
     useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true
   })

//Creación de Elementos para añadir a la DB
const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  //Creación de los elementos DENTRO de la DB
  Drone.create(drones)
  .then(dronesFromDB =>{
      console.log(`Created ${dronesFromDB.length} drones`);
      mongoose.connection.close();
  })
  .catch(err => console.log(`An error occured while creating the drones from the DB: ${err}`))