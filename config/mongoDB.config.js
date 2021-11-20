// async functions to use in seeding
require("dotenv").config(); //install
const mongoose = require("mongoose");
const { MONGO_PORT, MONGO_URL } = process.env;

async function mongoConnect() {
    try {
        const { connection } = await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log("Connection established", connection.name);
    } catch (error) {
        console.log(error);
    }
}
async function mongoDrop() {
    try {
        mongoose.connection.dropCollection("drones")
    } catch (error) {
        console.log(error);
    }
}
async function mongoClose() {
    try {
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}

//export
module.exports = { mongoConnect, mongoDrop, mongoClose };
