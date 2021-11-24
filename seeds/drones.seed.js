// Iteration #1
//1.IMPORTACIONES
const mongoose = require("mongoose");
const Drone = require("./../models/Drone.model");
require("dotenv").config();

//2.CONEXION DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//3. DATOS A POBLAR
const drones = [
  {
    name: "Creeper XL 500",
    propellers: 3,
    maxSpeed: 12,
    image:
      "https://cdn.vox-cdn.com/thumbor/eCSIzzCDMz9LwDBq7efiFpwXvj4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/4171174/DJI_Phantom_3_Skyscraper.0.0.jpg",
  },
  {
    name: "Racer 57",
    propellers: 4,
    maxSpeed: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Autumn_Drone_%28cropped%29.jpg",
  },
  {
    name: "Courier 3000i",
    propellers: 6,
    maxSpeed: 18,
    image: "https://launchberg.com/content/images/2019/10/drones.jpg",
  },
];

//4.POBLAR LA BASE DE DATOS
const createDronesDB = async () => {
  const newDrones = await Drone.create(drones);

  //termina la conenexion de la base de datos
  mongoose.connection.close();
};

createDronesDB();
