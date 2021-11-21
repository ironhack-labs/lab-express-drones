require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_URL } = process.env;

async function mongoConnect() {
  try {
    const { connection } = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection established", connection.name);
  } catch (error) {
    console.error("Error while connecting to Mongo", error);
  }
}

async function mongoDrop() {
  try {
    await mongoose.connection.dropCollection("drones");
  } catch (error) {
    console.error("Error occured while dropping collection", error);
  }
}

async function mongoClose() {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error occured while closing connection to DB", error);
  }
}

module.exports = { mongoConnect, mongoDrop, mongoClose };
