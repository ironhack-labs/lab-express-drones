// Iteration #1
require("dotenv").config()
const data = require("./data");
const mongoose = require("mongoose");
const Drones = require("../models/drone-model")


const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

async function seedDb(){
  try{
    await mongoose.connect(process.env.MONGODB_URL, dbOptions)
    const drones = await Drones.create(data)
    console.log(drones)
    mongoose.connection.close()
  }catch(e){
    console.error(e)
  }
}
seedDb()