// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/lab-express-drones";

const connectDB =async()=>{
  try {
      await mongoose.connect(MONGO_URI),{
          useNewUrlParser : true,
          useUnifiedTopology: true
      }
      return console.log("base de datos conectada correctamente");
  } catch (error) {
      console.log(error)
  return process.exit(1) // MATA LA INSTANCIA DE NODEJS HACIA ESE CLIENTE
  }
}

module.exports = connectDB;