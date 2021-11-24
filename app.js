//1. IMPORTACIONES

const express = require("express")
const app     = express()

const hbs      = require("hbs")
const connectDB = require("./db/index.js")


require("dotenv").config()

//2. MIDDLEWARES
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")
app.use(express.urlencoded({extended: true}))

connectDB()

// 3. RUTEO
app.use("/drones", require("./routes/drones"))

app.use("/", require("./routes/index"))



// 4. SERVER
app.listen(process.env.PORT,()=>{
    console.log(`Corriendo en el puerto ${process.env.PORT}`);
})