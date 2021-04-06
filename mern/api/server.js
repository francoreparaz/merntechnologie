const express= require ("express");
const app = express()
const morgan= require ("morgan")
const path = require ("path")
const {mongoose} = require("./database")

//settings
app.set("port", process.env.PORT || 4000)

//Midlewears
app.use(morgan("dev"))
app.use(express.json())

// Routes
app.use("/api/task",require("./Taskroutes"))

//Statics files
 console.log(path.join("./public/index.html"))
app.use(express.static(path.join( "./public/")))
//Starting server
app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})